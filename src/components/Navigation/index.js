import React, { lazy } from "react";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import styles from "./styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const Box = lazy(() => import("@material-ui/core/Box"));
const Grid = lazy(() => import("@material-ui/core/Grid"));
const MoAvatar = lazy(() => import("./MoAvatar"));
const MoMenu = lazy(() => import("./MoMenu"));

const Navigation = ({ classes }) => {
  return (
    <header className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.alignCenter}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Typography className={classes.title} variant="h6" noWrap>
                <Link
                  to={ROUTES.LANDING.path}
                  style={{ color: "#383c40", textDecoration: "none" }}
                >
                  <Box fontWeight="fontWeightLight" className={classes.MoSkool}>
                    Mo Skool
                  </Box>
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              style={{ textAlign: "right" }}
            >
              <AuthUserContext.Consumer>
                {authUser => (
                  <>
                    <MoMenu authUser={authUser} />
                    <MoAvatar authUser={authUser} />
                  </>
                )}
              </AuthUserContext.Consumer>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withStyles(styles)(Navigation);
