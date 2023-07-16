import React from 'react';

import Header from './Header_Nav/HeaderTopTwoColors';
import FooterSimple from './Footer/FooterSimple';
import Under_header from './Under_header';
import Banner from './Launching';

const Home = () => {
    return ( <div>
        <Header />
        <Under_header />
            <div className='h-[120px]' />
            <Banner />
        <FooterSimple />
    </div>)
}

export default Home;