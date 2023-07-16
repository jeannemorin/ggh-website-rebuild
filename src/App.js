import React from 'react';
// components
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Header from './components/Header_Nav/HeaderTopTwoColors';
import FooterMenu from './components/Footer/FooterMenu';
import FooterSimple from './components/Footer/FooterSimple';
import Team_Round from './components/Banner/Team_Round';
import Asso from './components/Asso';
import Under_header from './components/Under_header';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Under_header />
      <Asso />
      <FooterSimple />
    </div>
  );
};

export default App;
