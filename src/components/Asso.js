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
        name: 'Lorine Truong thanh dang',
        photo: Photo,
        role: 'Présidente',
    },
    {
        name: 'Mikael Sourati',
        photo: Photo,
        role: 'Vice président',
    },
    {
        name: 'Elie Abi-khalil',
        photo: Photo,
        role: 'Trésorier',
    },
    {
        name: 'Noémie Aubert',
        photo: Photo,
        role: 'Secrétaire',
    },
    {
        name: 'Ronan Pédron',
        photo: Photo,
        role: 'Respo event',
    },
    {
        name: 'Jeanne Morin',
        photo: Photo,
        role: 'Respo Hackathon',
    },
    {
    name: 'Amanda Lassel',
        photo: Photo,
        role: 'Respo Créa',
    },
    {
        name: 'Alexis Mer',
        photo: Photo,
        role: 'Respo Talk',
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
        <Join />
        <FooterSimple />
    </div>)
};

export default Asso;