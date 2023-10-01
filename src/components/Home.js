import React from 'react';

import Header from './Header_Nav/HeaderTopTwoColors';
import FooterSimple from './Footer/FooterSimple';
import UnderHeader from './Under_header';
import Banner from './Launching';
import TextSlider from './TextSlider';
import About from './Hackathon/About';
import Edition from './Hackathon/Editions';

import Contact from './Contact';


const Home = () => {
    return ( <div>
        <Header />
        <UnderHeader />
        <Banner />
        <TextSlider />
        <About />
        <Edition />
        <Contact />
        <FooterSimple />
    </div>)
}

export default Home;