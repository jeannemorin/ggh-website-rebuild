import React from 'react';

import Events from './Editions/Events';
import Header from './Header_Nav/HeaderTopTwoColors';
import FooterSimple from './Footer/FooterSimple';
import UnderHeader from './Under_header';

const hackathons=[
  {
    name: 'Edition #0',
    description: 'Hackathon GGH #0 Spring Edition 2021 - 100% distanciel !',
    link: 'Découvrir',
    href:"archives/edition0"
  },
  {
    name: 'Edition #1',
    description: 'Hackathon GGH #1 Winter Edition 2021 - En partenariat avec la Société Générale - Première édition présentielle',
    link: 'Découvrir',
    href:"archives/edition1"
  },
  {
    name: 'Edition #2',
    description: 'Hackathon GGH #2 Spring Edition 2022 - En partenariat avec la Société Générale',
    link: 'Découvrir',
    href:"archives/edition2"
  },
  {
    name: 'Edition #3',
    description: 'Hackathon GGH #3 Winter Edition 2022 - En partenariat avec Massa & Société Générale',
    link: 'Découvrir',
    href:"archives"
  },
  {
    name: 'Edition #4',
    description: 'Hackathon GGH #4 Winter Edition 2023 - En partenariat avec SLB',
    link: 'Découvrir',
    href:"archives"
  }
];

const afterworks=[
    {
      name: 'Afterwork GGH x Qonto',
      description: 'Afterwork découverte des technologies qonto - Septembre 2022',
    },
    {
        name: 'Afterwork GGH x Datadog',
        description: 'Afterwork découverte des technologies datadog - Octobre 2023',
      },
]

const talks=[
  {
    name: 'Gotta Go Talk #1 : L\'expérience Y Combinator',
    description: 'Speaker : Benjamin Netter, Founder @Riot, et Tom Nguyen, CEO @Café  - Décembre 2023',
  },
  {
      name: 'Gotta Go Talk #2 : Découvrir STATION F',
      description: 'Speaker : Ethan Safar, CEO @Payconsent - Février 2024',
    },
]

const Archives = () => {
  return (
    <div>
        <Header />
        <UnderHeader />
        <Events events={hackathons} title="Hackathons" description="Des Hackathons, nos évènements phares depuis mai 2021 !"/>
        <Events events={talks} title="Talks" description="Des moments d'échanges uniques avec des Entrepreneurs."/>
        <Events events={afterworks} title="Afterworks" description="Des afterworks pour découvrir des technologies et rencontrer des startups."/>

        <FooterSimple />
   </div>
  );
};

export default Archives;