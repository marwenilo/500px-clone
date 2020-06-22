import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import InfoCard from "./InfoCard";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
   
  }, []);
  return (
    <Fragment>
      <HeadSection />
      <InfoCard />
      
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
