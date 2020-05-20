/**
 * MoLink
 * Browser and Editor mocks are styled to look like a browser to frame the code editor and preview panels
 *
 * @param {String} href - required route to navigate to, otherwise it will be a # for route
 * @param {String} text - text displayed for the button
 */

import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoLink = ({ classes, href, text }) => {
  return (
    <Button component={Link} to={href ? href : "#"} className={classes.link}>
      {text}
      <ArrowForwardIcon className="arrow" />
    </Button>
  );
};

export default withStyles(styles)(MoLink);
