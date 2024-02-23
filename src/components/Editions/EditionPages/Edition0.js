import React from 'react'

import Banner from "../Banner"

import Header from '../../Header_Nav/HeaderTopTwoColors'
import UnderHeader from '../../Under_header';
import FooterSimple from '../../Footer/FooterSimple'
import Projects from '../Projects'

//import Cup from '../../assets/cup.svg'
import PtitsSups from '../../../assets/teams/0/ptits_sups.webp'
import Alcoolib from '../../../assets/teams/0/alcoolib.webp'
import Harmoniks from '../../../assets/teams/0/harmoniks.webp'
import EzTax from '../../../assets/teams/0/ez_tax.webp'
import Zelanders from '../../../assets/teams/0/zelanders.webp'
import TroyTeam from '../../../assets/teams/0/troy_team.webp'
import ReunitedHackers from '../../../assets/teams/0/reunited_hackers.webp'
import DDD from '../../../assets/teams/0/ddd.webp'

import Logo from '../../../assets/editions/0.png'
import Image from "../../../assets/editions/0.png"

const projects = [
    [ {
        image: PtitsSups,
        name: "Once Student A Time - Les p'tits sups",
        content: `
            Un "serious game", permettant de s'immiscer dans la vie d'un étudiant en 2020 et visant principalement à
            sensibiliser la population non-étudinante aux problèmes des jeunes, qui se sentent ignorés dans cette
            crise sanitaire, et d'encourager les dons envers les associations concernées. Ce jeu vidéo vise aussi
            accessoirement à servir un devoir de mémoire pour que les générations futures puissent revivre ce que
            les étudiants de 2020 ont vécu.
        `
    },
    {
        image: Alcoolib,
        name: "Alcolib - ETGM",
        content: `
            Une application web et mobile permettant d'obtenir des informations sur un alcool à partir d'une photo,
            'une marque ou d'un nom de bouteille, et offrant des recommandations comme le ferait un caviste. Elle
            met notamment en avant les alcools bios et locaux.
        `
    },
    {
        image: Harmoniks,
        name: "Do Me A Favor - Harmoniks",
        content: `
            Une application web permettant de demander de l'aide entre étudiants. Elle possède un système de dettes
            de services. Les étudiants trop endettés y ont la possibilité de repayer leur dû en effectuant des
            services éco-respoonsables.
        `
    },
    {
        image: EzTax,
        name: "EZ-TAX - Groot",
        content: `
            Une applicaiton web eprmettant de guider les étudiants et les jeunes adultes dans leur découvert des
            joies de l'administration française, et les accompagnants dans leurs démarches administratives.
        `
    },
    {
        image: Zelanders,
        name: "Giwa - Les Zelanders",
        content: `
            Une application web permettant à tous, mais notamment aux étudiants, de trouver des groupes avec
            lesquels organiser des évènements comme des parties de jeux Minecraft ou Among US en période de Covid.
            La plus value de cette application est qu'elle se focaliste sur l'instantanéité du processus. Le projet
            pouvait aussi s'étendre à l'organisation d'évènements en présentiel.
        `
    },
    {
        image: TroyTeam,
        name: "Java rencontre un python - TroyTeam",
        content: `
            Une plateforme d'échange en ligne permettant de filtrer les éléments toxiques afin d'offrir des
            interactions plus saines.
        `
    },
    {
        image: ReunitedHackers,
        name: "La PEC - Reunited Hackers",
        content: `
            Une application web permettant à un étudiant de rencontrer un autre étudiant, et de s'apprendre l'un
            l'autre des cours, à la manière des applications existantes permettant à deux personnes de s'apprendre
            l'une l'autre leurs langues.
        `
    },
    {
        image: DDD,
        name: "Salut ça taff ? - Les développeurs du dimanche",
        content: `
            Une plateforme d'échange de connaissances permettant à des étudiants et des professeurs de plusieurs
            établissements différents de partager leurs fiches de cours et exercices afin d'avoir une base de données
            centralisée et unifiée facilitant la révision et permettant d'explorer plus que le seul programme
            scolaire de son école.
        `
    }]
];

const themes = [
    {
        name:"Avoir 20 ans en 2020"
    }
];


const edition = {
    number:"0",
    dates:"21/22/23 MAI 2021",
    logo: Logo,
    summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Cursus in hac habitasse platea. Vitae tempus quam pellentesque nec nam. Platea dictumst vestibulum rhoncus est pellentesque elit. Massa placerat duis ultricies lacus sed. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Orci nulla pellentesque dignissim enim sit amet. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Morbi tristique senectus et netus. Sit amet aliquam id diam maecenas ultricies mi eget mauris. A diam maecenas sed enim. Id aliquet lectus proin nibh nisl condimentum id. Justo nec ultrices dui sapien eget mi proin sed. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Risus commodo viverra maecenas accumsan. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Eget sit amet tellus cras adipiscing enim eu turpis.",
    image: Image
}

const Edition0 = () =>  {

    return (
        <div>
            <Header />
            <UnderHeader />
            <Banner edition={edition.number} dates={edition.dates} image={Logo}/>
            <Projects projects={projects} themes={themes} />
            <FooterSimple />
        </div>
        
    )

}

export default Edition0;

