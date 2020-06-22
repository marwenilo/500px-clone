import React from "react";
import { infoCard } from "./HomeData";
import { withStyles } from "@material-ui/core";
const styles = (theme) => ({
    cardsSection: {
    display: "flex",
    margin:"32px",
    padding:"30px",
    flexDirection: "column",
    alignItems: "center",

  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "start",
    flex: "1",
    margin: "20px",
    padding: "20px",
  },
  cards:{
      display:"flex",
 
  },
  hCard:{
    fontSize: "36px",
    lineHeight: "40px",
    fontWeight: "bold",
    textTransform: "none",
    color: "rgb(34, 34, 34)",
    textAlign: "center",
    margin: "0px",
      marginBottom:"64px"
  }
});
function InfoCard(props) {
  const { classes, theme } = props;
  return (
    <div className={classes.cardsSection}>
    <h2 className={classes.hCard}><span>
    What makes us different

    </span></h2>
    <div className={classes.cards}>
      {infoCard &&
        infoCard.map((card, key) => (
          <div className={classes.cardContainer}>
            <i class={card.icon}></i>
            <h3>
              <span>{card.title}</span>
            </h3>
            <p>
              <span>{card.parg}</span>
            </p>
          </div>
        ))}
        </div>
    </div>
  );
}
export default withStyles(styles, { withTheme: true })(InfoCard);
