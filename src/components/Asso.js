import React from 'react';

import Header from './Header_Nav/HeaderTopTwoColors';
import under_header from './Under_header';
import FooterSimple from './Footer/FooterSimple';

import About_Asso from './Asso/Banner/About_Asso';
import Team_Hacktive from './Asso/Banner/Team_Hacktive';
import Team_Woodchack from './Asso/Banner/Team_Woodchack';
import Team_Round from './Asso/Banner/Team_Round';

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
        <under_header />
        <About_Asso />
        <Team_Hacktive />
        <Team_Round members={members}/>
        <Team_Woodchack />
        <Team_Round members={members}/>
        <Contact />
        <FooterSimple />
    </div>)
};

export default Asso;