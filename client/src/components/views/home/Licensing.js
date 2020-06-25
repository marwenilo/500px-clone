import React from "react";
import { withStyles } from "@material-ui/core";
import imh from "../../../assets/images/8.jpg";
import imhs from "../../../assets/images/licensing_collage.png";
const styles = (theme) => ({
  LicensingContainer: {},
  LicensingHeaderContainer: {
    height: "500px",
    wordBreak: "break-word",
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    position: "relative",
    backgroundPosition: "center -588px",
    backgroundSize: "cover",
    backgroundImage: `url(${imh})`,
    backgroundRepeat: "no-repeat",
  },
  doteQuests: {
    height: "150px",
    width: "150px",
    backgroundColor: "#e44059",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "70px 0",
  },
  hLicensing: {
    fontSize: "45px",
    lineHeight: "52px",
    fontWeight: "bold",
    textTransform: "none",
    color: "black",
    margin: "0px",
  },
  h2Licensing: {
    fontSize: "52px",
    lineHeight: "52px",
    fontWeight: "bold",
    textTransform: "none",
    color: "white",
    margin: "0px",
  },
  LicensingBtn: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    width: "19%",
    height: "80px",
    minWidth: "216px",
    lineHeight: "56px",
    fontSize: "30px",
    backgroundColor: "rgb(255, 255, 255)",
    color: "white",
    backgroundColor: "black",
    padding: "0px 31px",
    borderRadius: "100px",
    margin: "16px 0px 0px",
    borderWidth: "initial",
    borderStyle: "none",
    borderColor: "initial",
    borderImage: "initial",
    transition: "background-color 0.1s ease 0s",
    textDecoration: "none",
  },
  LicensingBottomContainer: {
    padding: "32px 64px",
    display: "flex",
  
   
  },
  pLicensing: {
    fontSize: "17px",
    lineHeight: "21px",
    letterSpacing: "0px",
    textTransform: "none",
    color: "rgb(34, 34, 34)",
  },
  QuestsBottomLeft:{
    alignItems: "start",
    justifyContent: "flex-end",
    display: "flex",
    textAlign: "start",
   
    flexDirection: "column",
    padding: "35px",
  },
  QuestsImg:{
    maxWidth: "630px",
   padding:"20px"
  }
});
function Licensing(props) {
  const { classes } = props;

  return (
    <div className={classes.LicensingContainer}>
      <div className={classes.LicensingHeaderContainer}>
        <span className={classes.doteQuests}>
        <i class="fas fa-crown fa-5x"></i>
        </span>
        <h2 className={classes.h2Licensing}>
          {" "}
          <span>Licensing</span>
        </h2>
      </div>



      <div className={classes.LicensingBottomContainer}>
      <img className={classes.QuestsImg} src={imhs} alt="img" />
      <div className={classes.QuestsBottomLeft}>
      <i class="fas fa-piggy-bank fa-7x"></i>
      <h2 className={classes.hLicensing}><span>
      Get paid for your photos
      </span></h2>
        <p className={classes.pLicensing}>
          <span>
          Don’t let your photos sit there gathering dust, like on other platforms. Gain exposure and get paid for your work with 500px Licensing. You'll earn 60% royalties (one of the industry's highest rates) when you license your photos exclusively with our global distribution partners.
          </span>
        </p>
        <a
          variant="outlined"
          size="large"
          color="primary"
          href="login"
          className={classes.LicensingBtn}
        >
          Tell me more
        </a>
        </div>
       
      </div>
    </div>
  );
}
export default withStyles(styles, { withTheme: true })(Licensing);
