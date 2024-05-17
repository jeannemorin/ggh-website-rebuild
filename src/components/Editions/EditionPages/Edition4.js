import React from 'react'

import {motion } from 'framer-motion'
import {fadeIn} from '../../../variants'

import Banner from "../Banner"

import Header from '../../Header_Nav/HeaderTopTwoColors'
import UnderHeader from '../../Under_header';
import FooterSimple from '../../Footer/FooterSimple'
import Projects from '../Projects'


import Logo from "../../../assets/editions/4.png";

import anxigo from "../../../assets/teams/4/anxigo.png";
import drinkr from "../../../assets/teams/4/drinkr.png";
import focus from "../../../assets/teams/4/focus.png";
import jimmy from "../../../assets/teams/4/jimmy.jpg";
import kinemotion from "../../../assets/teams/4/kinemotion.png";
import peer from "../../../assets/teams/4/peer.png";
import ready2start from "../../../assets/teams/4/ready2start.png";
import tidyUp from "../../../assets/teams/4/tidyup.png";
import vitalyPaw from "../../../assets/teams/4/vitalypaw.png";
import Image from "../../../assets/editions/4/global.jpg"

const projects = [
    [
    {
        image: ready2start,
        name: "Ready2Start",
        content: `
       Imaginez un avenir où les datacenters ne rejettent pas 12 milliards de tonnes de CO2 par an. 
       MOON, c’est un projet futuriste qui propose d’installer des datacenters sur la Lune, là où il n’y 
       ni faune ni flore à protéger, là où les questions de chaleur ne pose aucun problème, 
       là où il reste encore tout à imaginer. Pour un cloud au-delà des nuages.`
    },
    {
        image: kinemotion,
        name: "KinéMotion",
        content: `
        KinéMotion, c'est une application conçue pour faciliter la rééducation physique 
        à domicile grâce au Motion Tracking. Destinée aux kinésithérapeutes, cette plateforme 
        offre un accès privilégié à un catalogue d'exercices professionnels et de mini-jeux 
        interactifs pour rendre la réeducation de leurs patients plus motivante.
        `
    },
    {
        image: vitalyPaw,
        name: "VitalyPaw",
        content: `
        VitalityPaw est une application de bien-être pour animaux de compagnie conçue pour aider 
        les propriétaires d'animaux à suivre les activités et le bien-être de leurs animaux.  
        `,
    },

    {
        image: anxigo,
        name: "Anxigo",
        content: `
        ANXIGO est un jeu web qui s'intégre dans le protocol RAAC. Il permet aux patients de 
        mieux appréhender les interventions chirurgicales qu'ils pourraient subir. L'objectif 
        sera de prévenir des problèmes post et pré opératoires en permettant aux patients de 
        mieux comprendre les interventions chirurgicales et les risques qui y sont associés.
        `
    },
    {
        image: focus,
        name: "Focus",
        content: `
        Focus est une application mobile qui permet d'apprendre à gérer les distractions que l'on 
        peut avoir au quotidien tel que les notifications, les réseaux sociaux, les appels, à travers 
        des mini jeux mobiles.
        `
    },
    {
        image: jimmy,
        name: "Jimmy",
        content: `
        Jimmy est un élève comme beaucoup d'autres : il n'aime pas l'école. Lui ce qu'il aime 
        c'est les jeux vidéo et les réseaux sociaux. Le projet imotep est là pour redonner goût 
        aux étudiants en gamifiant leur scolarité. Ensemble, sauvons tous les Jimmy de l'ennuie.`
    },
    {
        image: drinkr,
        name: " Drinkr",
        content: `
        Drinkr est une application simple et ludique qui permet à ses utilisateurs de faire de 
        nouvelles rencontres et de jouer dans les bars.
        `
    },
    {
        image: tidyUp,
        name: "TidyUp",
        content: `
        une application mobile pour rendre le rangement amusant et efficace ! Après avoir scanné 
        l’espace de rangement ainsi que les items à ranger, notre jeu vidéo mobile permet comme 
        sur Tetris de venir ordonner les items sous forme de blocs au sein de l’espace de rangement.
        `
    },
    {
        image: tidyUp,
        name: "Gotta Go Piss",
        content: `
        En novembre 2023, GottaGoPiss présente son tout nouveau produit, le PIP-E 
        (PissInPeace-Electronics). Ce kit d'urinoir vise à rendre l'expérience de se rendre 
        à l'urinoir à la fois conviviale et bénéfique, allant au-delà de la simple vidange de 
        la vessie.
        `
    },
    {
        image: peer,
        name: "Peer",
        content: `
        Peer est une plateforme d'apprentissage, d'échange de connaissances et de rencontre
         avec des personnes ayant les mêmes motivations, mise en place sous forme de site web.
        Elle est divisée en trois parties pour chaque sujet : Quêtes personnelles, forum et quêtes 
        de la communauté et Événements.

        `
    }]

];

const themes= [
    {
        name:"La vie c'est un jeu"
    }
]

const edition = {
    number:"4",
    dates:"10/11/12 NOV 2023",
    logo: Logo,
    summary:"",
    image: Image
}

const Edition4 = () =>  {

    return (
        <div>
            <Header />
            <UnderHeader />
                <div className='container mx-auto'>
                    <Banner edition={edition.number} dates={edition.dates} image={Logo}/>
                    
                    <section id='summary' className='' > 
                        <div className='container mx-auto'>
                            <div className='flex flex-col lg:flex-row lg:items-center 
                            lg:gap-x-20 lg:gap-y-0 h-screen'>

                            {/*img sm*/}
                            <motion.div 
                                variants={fadeIn('left',0.5)} 
                                initial="hidden" 
                                whileInView={'show'} 
                                className='lg:hidden justify-center items-center flex bg-contain bg-no-repeat
                                mix-blend-lighten bg-top'
                                >
                    
                                <img src={edition.image} alt='' />
                            </motion.div>
                    
                            {/*text*/}
                            <motion.div 
                            variants={fadeIn('right',0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.3}}
                            className='flex flex-col flex-1 lg:items-start items-center lg:gap-y-6 lg:mt-0 mt-6'>
                                <h1 className='h1 lg:mb-4 text-accent'>EN BREF</h1>
                                <p className='mb-6 text-center lg:text-start'>
                                    Le Hackathon GGH #4 Winter Edition 2023 a réuni <span className='font-semibold'>une cinquantaine de participant sur le campus EPITA / EPTECH Paris !</span>
                                </p>
                                <p className='mb-6 text-center lg:text-start'> 
                                    Une dizaine d'équipe se sont lancées dans la compétition autour du thème <span className='font-semibold'>"La vie c'est un jeu"</span>
                                    , autour de la gamification du quotidien.
                                </p>
                                <p className='mb-6 text-center lg:text-start font-semibold'>Cette édition a été possible grâce au soutien de SLB, partenaire de notre évènement.</p>

                            </motion.div>

                            {/*img*/}
                            <motion.div 
                                variants={fadeIn('left',0.3)} 
                                initial="hidden" 
                                whileInView={'show'} 
                                className='hidden lg:flex  flex-1 bg-contain bg-no-repeat
                                mix-blend-lighten bg-top'
                                >
                                <img src={edition.image} alt='' />
                            </motion.div>
                            </div>
                        </div>
                    </section>

                    <Projects projects={projects} themes={themes} />
                
                </div>
            <FooterSimple />
        </div>
        
    )

}

export default Edition4;

