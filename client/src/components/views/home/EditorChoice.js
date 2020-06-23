import React from "react";
import { withStyles } from "@material-ui/core";
import imh from "../../../assets/images/1.jpg";


const styles = (theme) => ({
  editorContainer: {
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
    height: "200px",
    width: "200px",
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
  }
});
function EditorChoise(props) {
  const { classes } = props;

  return <div className={classes.editorContainer}>
<span className={classes.dote}>
<i class="fas fa-award fa-7x"></i>
</span>
<h2 className={classes.hEditor}> <span>Editors’ Choice</span></h2>
  </div>;
}
export default withStyles(styles, { withTheme: true })(EditorChoise);
