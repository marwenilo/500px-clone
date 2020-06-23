import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import InfoCard from "./InfoCard";
import GetApp from "./GetApp"
import EditorChoice from "./EditorChoice";
function Home(props) {

  return (
    <Fragment>
      <HeadSection />
      <InfoCard />
      <GetApp />
      <EditorChoice/>
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
