import React from 'react';
import '../../App.css';
import Cards from '../../Cards';
import HeroSection from '../../intro';
import Connectb from '../../connectb';
//import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <img className='pim' src={require('../../partition.jpg')} />
      <Connectb />
    </>
  );
}
export default Home;