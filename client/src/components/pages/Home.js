import React from 'react';
import '../../App.css';
import Cards from '../Card'
import HeroSection from '../heroSection';
import Footer from '../Footer';
import Model from '../picUp'

function Home() {
  return (
    <>
      {/* <Model/>  */}
      <div>
        <HeroSection />
        <Cards />
        <Footer/>
      </div>
    </>
  );
}

export default Home;