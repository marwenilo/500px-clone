import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  
  withStyles,
  withWidth,

} from "@material-ui/core";
  
import WaveBorder from "../../../assets/WaveBorder";
import imh from "../../../assets/images/7.jpg"
const styles = theme => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize
    }
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto"
    }
  },
  wrapper: {
    position: "relative",
height:"70vh",
    backgroundImage:`url(${imh})`,
    backgroundSize: "101%",
    backgroundPosition: "center -359px",
    backgroundRepeat: "no-repeat",
 
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4]
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3)
    }
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important"
    }
  },
  waveBorder: {
    position: "absolute",
    bottom: "0",
    width:"100%",
  },
  headBtnSign:{
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    width: "10%",
    height: "60px",
    minWidth: "216px",
    lineHeight: "56px",
    fontSize: "21px",
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(34, 34, 34)",
    padding: "0px 16px",
    borderRadius: "100px",
    margin: "16px 0px 0px",
    borderWidth: "initial",
    borderStyle: "none",
    borderColor: "initial",
    borderImage: "initial",
    transition: "background-color 0.1s ease 0s",
    textDecoration: "none",
  },
  headerInfo:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "100px 150px",
    maxWidth: "600px",
    textAlign: "initial",
    color: "white",
 
  },
  hDiscover:{
    fontSize: "48px",
    lineHeight: "52px",
    letterSpacing:" -0.4px",
    margin:"0"
  },
  pDiscover:{
    fontSize: "19px",
    lineHeight: "20px",
    letterSpacing: "0px",
    textTransform: "none",
    
  }
});

function HeadSection(props) {
  const { classes, theme } = props;
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
      <div className={classes.headerInfo}>

      
     <h1 className={classes.hDiscover}>
     <span>
      Discover and share the world’s best photos
      </span>
</h1>

     <p className={classes.pDiscover}><span>Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography.</span></p>
     <a variant="outlined" size="large" color="primary" href="login" className={classes.headBtnSign} >
         Sign up
        </a>
     </div>
      <WaveBorder

        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
       </div>
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
