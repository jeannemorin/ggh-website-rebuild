import React from 'react';

import Header from './Header_Nav/HeaderTopTwoColors';
import FooterSimple from './Footer/FooterSimple';
import UnderHeader from './Under_header';
import Banner from './Launching';
import TextSlider from './TextSlider';


const Home = () => {
    return ( <div>
        <Header />
        <UnderHeader />
        <Banner />
        <TextSlider />
        <FooterSimple />
    </div>)
}

export default Home;