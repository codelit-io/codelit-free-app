/**
 *
 *
 * @author Mo Skool
 * @version 1.0.0
 * @visibleName App Component 🥈
 *
 *
 * App component handles the following:
 *
 *  - lazy loads pages/containers
 *  - Handles routing for app
 *  - Provides the app with Material-UI theme instance
 *  - Renders App navigation
 *  - Suspense and loading
 */
import React, { Suspense, lazy } from "react";

import * as ROUTES from "constants/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { retry } from "helpers/retryLazyImports";
import Container from "@material-ui/core/Container";
import MoSpinner from "components/library/MoSpinner";
import useGlobal from "store";

const Navigation = lazy(() =>
  retry(() => import("components/shared/Navigation"))
);
const Account = lazy(() => retry(() => import("containers/Account")));
const AdminPage = lazy(() => retry(() => import("containers/AdminPage")));
const LandingPage = lazy(() => retry(() => import("containers/Landing")));
const NotFound = lazy(() => retry(() => import("components/shared/NotFound")));
const PasswordForgot = lazy(() =>
  retry(() => import("components/shared/PasswordForgot"))
);
const Playground = lazy(() => retry(() => import("containers/Playground")));
const Collections = lazy(() => retry(() => import("containers/Collections")));
const SignUp = lazy(() => retry(() => import("containers/SignUp")));
const SignIn = lazy(() => retry(() => import("containers/SignIn")));

const App = () => {
  // Global State
  const [containerSize] = useGlobal(state => state.themeOptions.containerSize);

  return (
    <Router>
      {/* Page size based on the page */}
      <Container maxWidth={containerSize}>
        <Navigation />
        <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
          <Switch>
            <Route path={ROUTES.ADMIN.path} component={AdminPage} />
            <Route path={ROUTES.ACCOUNT.path} component={Account} />
            <Route exact path={ROUTES.LANDING.path} component={LandingPage} />
            <Route exact path={ROUTES.NOT_FOUND.path} component={NotFound} />

            <Route path={ROUTES.SIGN_IN.path} component={SignIn} />
            <Route path={ROUTES.SIGN_UP.path} component={SignUp} />
            <Route
              path={ROUTES.PASSWORD_FORGET.path}
              component={PasswordForgot}
            />
            <Route path={ROUTES.PLAYGROUND.path} component={Playground} />
            <Route path={ROUTES.COLLECTIONS.path} component={Collections} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;
