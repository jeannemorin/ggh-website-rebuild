import React from 'react';

import Header from './Header_Nav/HeaderTopTwoColors';
import UnderHeader from './Under_header';
import FooterSimple from './Footer/FooterSimple';

import AboutAssoBanner from './Asso/Banner/About_Asso';
import TeamHacktiveBanner from './Asso/Banner/Team_Hacktive';
import TeamWoodchackBanner from './Asso/Banner/Team_Woodchack';
import TeamRoundMembersBanner from './Asso/Banner/Team_Round';

import Photo from '../assets/team/avatar.svg';
import Join from './Asso/Banner/Join';

const hacktive = [
    {
        name: 'Lorine Truong',
        photo: Photo,
        role: 'Présidente',
    },
    {
        name: 'Jeanne Morin',
        photo: Photo,
        role: 'Vice présidente',
    },
    {
        name: 'Elie Abi-khalil',
        photo: Photo,
        role: 'Trésorier',
    },
    {
        name: '',
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
        role: 'Respo event',
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
        <TeamRoundMembersBanner members={hacktive}/>
        <TeamWoodchackBanner />
        <TeamRoundMembersBanner members={hacktive}/>
        <Join />
        <FooterSimple />
    </div>)
};

export default Asso;