import React, { Fragment } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import InfoCard from "./InfoCard";
import GetApp from "./GetApp"
import EditorChoice from "./EditorChoice";
import Quests from "./Quests";
function Home(props) {

  return (
    <Fragment>
      <HeadSection />
      <InfoCard />
      <GetApp />
      <EditorChoice/>
      <Quests/>
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
