import React from "react";
import { withStyles } from "@material-ui/core";
import imh from "../../../assets/images/1.jpg";


const styles = (theme) => ({
  editorContainer:{

  },
  editorHeaderContainer: {
    height:"500px",
    wordBreak: "break-word",
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    position: "relative",
    backgroundPosition: "center -120px",
    backgroundSize: "cover",
    backgroundImage: `url(${imh})`,
    backgroundRepeat: "no-repeat",

  },
  dote:{
    height: "150px",
    width: "150px",
    backgroundColor: "rgb(12, 239, 232)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin:"70px 0"
  },
  hEditor:{
    fontSize: "80px",
    lineHeight: "40px",
    fontWeight: "bold",
    textTransform: "none",
    color: "rgb(255, 255, 255)",
    margin: "0px",
  },
  EditorBtn:{
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
    backgroundColor:"black",
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
  editorBottomContainer:{
    padding:"32px 64px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "228px",
},
pEditor:{

  fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0px",
    textTransform: "none",
    color: "rgb(34, 34, 34)",
}

});
function EditorChoise(props) {
  const { classes } = props;

  return(
    <div className={classes.editorContainer}>
     <div className={classes.editorHeaderContainer}>
<span className={classes.dote}>
<i class="fas fa-award fa-6x"></i>
</span>
<h2 className={classes.hEditor}> <span>Editors’ Choice</span></h2>
</div>
<div className={classes.editorBottomContainer}>
  <p className={classes.pEditor}>
    <span>
    Discover fresh inspiration daily. Your photos could even be featured in our handpicked Editors’ Choice Gallery.
    </span>
    </p>
    <a variant="outlined" size="large" color="primary" href="login" className={classes.EditorBtn} >
   View Editors’ Choice
        </a>
  
</div>

  </div>);
}
export default withStyles(styles, { withTheme: true })(EditorChoise);
