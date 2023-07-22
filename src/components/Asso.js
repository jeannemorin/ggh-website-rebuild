import React from 'react';

import Header from './Header_Nav/HeaderTopTwoColors';
import UnderHeader from './Under_header';
import FooterSimple from './Footer/FooterSimple';

import AboutAssoBanner from './Asso/Banner/About_Asso';
import TeamHacktiveBanner from './Asso/Banner/Team_Hacktive';
import TeamWoodchackBanner from './Asso/Banner/Team_Woodchack';
import TeamRoundMembersBanner from './Asso/Banner/Team_Round';

import Photo from '../assets/team/avatar.svg';
import Contact from './Contact';

const members = [
    {
        name: 'Jeanne Morin',
        photo: Photo,
        role: 'Présidente',
    },
    {
        name: 'Ronan Pédron',
        photo: Photo,
        role: 'Vice président',
    },
    {
        name: 'Alexandre Lemonnier',
        photo: Photo,
        role: 'Trésorier',
    },
    {
        name: 'Tao Blancheton',
        photo: Photo,
        role: 'Secrétaire',
    },
    {
        name: 'Jeanne Morin',
        photo: Photo,
        role: 'Présidente',
    },
    {
        name: 'Ronan Pédron',
        photo: Photo,
        role: 'Vice président',
    },
    {
        name: 'Alexandre Lemonnier',
        photo: Photo,
        role: 'Trésorier',
    },
    {
        name: 'Tao Blancheton',
        photo: Photo,
        role: 'Secrétaire',
    },
]

const Asso = () => {
    return (
    <div>
        <Header />
        <UnderHeader />
        <AboutAssoBanner />
        <TeamHacktiveBanner />
        <TeamRoundMembersBanner members={members}/>
        <TeamWoodchackBanner />
        <TeamRoundMembersBanner members={members}/>
        <Contact />
        <FooterSimple />
    </div>)
};

export default Asso;