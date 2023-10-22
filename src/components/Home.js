import React from 'react';

import Header from './Header_Nav/HeaderTopTwoColors';
import FooterSimple from './Footer/FooterSimple';
import UnderHeader from './Under_header';
import Banner from './Launching';
import TextSlider from './TextSlider';

import Editions from './Hackathon/Editions';
import About from './Hackathon/About';
import Contact from "./Contact"


const Home = () => {
    return ( <div>
        <Header />
        <UnderHeader />
        <Banner />
        <TextSlider />
        <About />
        <Editions />
        <Contact />
        <FooterSimple />
    </div>)
}

export default Home;