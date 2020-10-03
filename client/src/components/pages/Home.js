import React from "react";
import "../../App.css";
import Cards from "../Card";
import HeroSection from "../heroSection";
// import Footer from '../Footer';

function Home(props) {
  const history = props.history;
  return (
    <>
      <HeroSection history={history} />
      <Cards />
      {/* <Footer /> */} */
    </>
  );
}

export default Home;
