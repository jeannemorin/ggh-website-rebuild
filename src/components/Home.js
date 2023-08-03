import React from 'react';

import Header from './Header_Nav/HeaderTopTwoColors';
import FooterSimple from './Footer/FooterSimple';
import UnderHeader from './Under_header';
import Banner from './Launching';
import TextSlider from './TextSlider';

import Editions from './Hackathon/Editions';
import ThreeCol from './Hackathon/ThreeCol';
import Impact from './Hackathon/Impact';
import About from './Hackathon/About';
import Partners from './Hackathon/Partner';


const Home = () => {
    return ( <div>
        <Header />
        <UnderHeader />
        <Banner />
        <TextSlider />
        <About />
        <Partners />
        <Editions />
        <ThreeCol />
        <Impact />
        <FooterSimple />
    </div>)
}

export default Home;