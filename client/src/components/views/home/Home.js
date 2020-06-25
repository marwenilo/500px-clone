import React, { Fragment } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import InfoCard from "./InfoCard";
import GetApp from "./GetApp"
import EditorChoice from "./EditorChoice";
import Quests from "./Quests";
import Licensing from "./Licensing";
import Community from "./Community";
function Home(props) {

  return (
    <Fragment>
      <HeadSection />
      <InfoCard />
      <GetApp />
      <EditorChoice/>
      <Quests/>
      <Licensing/>
      <Community/>
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
