import React from "react";
import { withStyles } from "@material-ui/core";
import imh from "../../../assets/images/rr.jpg";
import imhs from "../../../assets/images/quests_collage.png";
const styles = (theme) => ({
  QuestesContainer: {},
  QuestesHeaderContainer: {
    height: "500px",
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
  hQuestes: {
    fontSize: "45px",
    lineHeight: "52px",
    fontWeight: "bold",
    textTransform: "none",
    color: "black",
    margin: "0px",
  },
  h2Questes: {
    fontSize: "52px",
    lineHeight: "52px",
    fontWeight: "bold",
    textTransform: "none",
    color: "black",
    margin: "0px",
  },
  QuestesBtn: {
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
  QuestesBottomContainer: {
    padding: "32px 64px",
    display: "flex",
  
   
  },
  pQuestes: {
    fontSize: "18px",
    lineHeight: "20px",
    letterSpacing: "0px",
    textTransform: "none",
    color: "rgb(34, 34, 34)",
  },
  QuestsBottomRight:{
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
function Quests(props) {
  const { classes } = props;

  return (
    <div className={classes.QuestesContainer}>
      <div className={classes.QuestesHeaderContainer}>
        <span className={classes.doteQuests}>
        <i class="fas fa-rocket fa-5x"></i>
        </span>
        <h2 className={classes.h2Questes}>
          {" "}
          <span>Quests</span>
        </h2>
      </div>



      <div className={classes.QuestesBottomContainer}>
      <div className={classes.QuestsBottomRight}>
      <i class="fas fa-trophy fa-7x"></i>
      <h2 className={classes.hQuestes}><span>
      Win prizes and gain global exposure with Quests
      </span></h2>
        <p className={classes.pQuestes}>
          <span>
          Creative challenges to help photographers test their skills, get recognized for their work, and win exciting prizes.
          </span>
        </p>
        <a
          variant="outlined"
          size="large"
          color="primary"
          href="login"
          className={classes.QuestesBtn}
        >
          View Questess
        </a>
        </div>
        <img className={classes.QuestsImg} src={imhs} alt="img" />
      </div>
    </div>
  );
}
export default withStyles(styles, { withTheme: true })(Quests);
