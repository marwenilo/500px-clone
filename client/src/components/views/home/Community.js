import React from "react";
import { withStyles } from "@material-ui/core";
const styles = (theme) => ({
  CommunityContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#45457C",
    padding: "45px",
  },

  pCommunity: {
    fontSize: "17px",
    lineHeight: "20px",
    letterSpacing: "0px",
    textTransform: "none",
    color: "white",
    maxWidth: "860px",
  },
  CommunityBtn: {
    color: "black",
    width: "12%",
    height: "68px",
    margin: "16px 0px 0px",
    display: "inline-flex",
    padding: "0px 31px",
    fontSize: "27px",
    minWidth: "187px",
    transition: "background-color 0.1s ease 0s",
    alignItems: "center",
    fontWeight: "bold",
    lineHeight: "53px",
    borderColor: "initial",
    borderImage: "initial",
    borderStyle: "none",
    borderWidth: "initial",
    borderRadius: "100px",
    justifyContent: "center",
    textDecoration: "none",
    backgroundColor: "white",
  },
  hCommunity: {
    fontSize: "45px",
    lineHeight: "52px",
    fontWeight: "bold",
    textTransform: "none",
    color: "white",
    margin: "0px",
  },
});
function Community(props) {
  const { classes } = props;
  return (
    <div className={classes.CommunityContainer}>
      <h2 className={classes.hCommunity}>
        <span>Join our photography community today</span>
      </h2>
      <p className={classes.pCommunity}>
        <span>
          We want fresh, creative talent like you. Join our global network of
          like-minded creators to be inspired by incredible photos daily, and
          get rewarded for your talents.
        </span>
      </p>
      <a
        variant="outlined"
        size="large"
        color="primary"
        href="login"
        className={classes.CommunityBtn}
      >
        Sign up
      </a>
    </div>
  );
}
export default withStyles(styles, { withTheme: true })(Community);
