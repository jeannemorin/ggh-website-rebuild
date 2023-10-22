import React from 'react'

import Marquee from "react-fast-marquee";
import {motion } from 'framer-motion'
import {fadeIn} from '../../../variants'

import Banner from "../Banner"

import Header from '../../Header_Nav/HeaderTopTwoColors'
import FooterSimple from '../../Footer/FooterSimple'
import Projects from '../Projects'

import { BsArrowRight } from "react-icons/bs"

import Logo from "../../../assets/editions/2.png";

import cidoos from '../../../assets/teams/2/cidoos.png';
import crowsnews from '../../../assets/teams/2/crowsnews.png';
import gottagodance from '../../../assets/teams/2/gottagodance.png';
import gottafityou from '../../../assets/teams/2/gottafityou.png';
import lightcom from '../../../assets/teams/2/lightcom.png';
import moon from '../../../assets/teams/2/moon.png';
import ploutos from '../../../assets/teams/2/plutos.png';
import proxint from '../../../assets/teams/2/proxint.png';
import ratsdao from '../../../assets/teams/2/ratsdao.png';
import shopmaker from '../../../assets/teams/2/shopmaker.png';
import tutoalexa from '../../../assets/teams/2/tutoalexa.png';
import tutomath from '../../../assets/teams/2/tutomath.png';
import tutopres from '../../../assets/teams/2/tutopres.png';
import uroom from '../../../assets/teams/2/uroom.png';
import Image from "../../../assets/editions/2/winner.jpg"

const projects = [
    [
    {
        image: moon,
        name: "MOON - Equipe Moon",
        content: `
       Imaginez un avenir où les datacenters ne rejettent pas 12 milliards de tonnes de CO2 par an. 
       MOON, c’est un projet futuriste qui propose d’installer des datacenters sur la Lune, là où il n’y 
       ni faune ni flore à protéger, là où les questions de chaleur ne pose aucun problème, 
       là où il reste encore tout à imaginer. Pour un cloud au-delà des nuages.`
    },
    {
        image: proxint,
        name: "Proxint - Equipe TooEmptyKay",
        content: `
        Les interconnexions possibles aujourd'hui nous permettent d’être en contact instantanément avec 
        l’autre bout du monde, mais nous font oublier ce qu’il y a autour de nous.  L’idée derrière PROXINT, 
        c’est d’équiper les commerçants avec des petits boitiers bluetooth qui notifient les passants 
        possédant l’application. Toutes formes d’informations pourraient être transmises : des promotions, 
        une recherche d’employés, l'installation d’un nouveau commerce…
        Un seul objectif : remettre la vie de quartier au centre de nos interractions.

        `
    },
    {
        image: cidoos,
        name: "Cidoos - Equipe Cidoos",
        content: `
        Un jeu mobile avec des petits monstres, des Cidoos, sans aucune publicité! Ballades toi avec ton Cidoo 
        dans la poche pour gagner de la cryptomonnaie! Bats toi contre d'autres joueurs et tente de gagner le 
        Cidoo de l'adversaire ou risque de perdre le tien! 
        `,
        underline : `Rejoins-nous sur Twitter pour plus d'informations ! `,
        url: `https://twitter.com/CidoosOfficial`
    },
    {
        image: gottagodance,
        name: "Gotta Go Dance - Equipe GottaGoDance",
        content: `
        Salut à toi jeune célibataire ! Tu en as marre des sites de rencontres qui fonctionnent comme des 
        supermarchés ? Viens rejoindre Gotta Go Dance, le premier site de rencontre dans le métavers qui te 
        fait rencontrer des gens directement sur le dancefloor. Prends ton téléphone, allume la caméra, et 
        tous tes gestes seront retranscrits directement par ton avatar sur la piste de danse. Un match 
        réciproque ? Tu peux te retrouver dans un carré VIP pour discuter en privé avec cette personne. 
        Tu peux également venir avec tes potes et passer la meilleure des soirées !

        `
    },
    {
        image: ploutos,
        name: "Ploutos - Equipe FARM",
        content: `
        Application proposant un bot tutoriel pour découvrir le monde de la crypto et du trading de manière 
        ludique. Le programme investit en bourse à votre place en suivant une stratégie préfaite de votre 
        choix, et vous explique de manière pédagogique ses choix et ses actions.

        `
    },
    {
        image: shopmaker,
        name: "ShopMaker - Equipe Flying Bananas",
        content: `
        Le shopping de demain se situe dans le Metavers. Et si à la fin de votre partie Minecraft, vous 
        passiez au Carrefour Market, à l’angle derrière le donjon, pour votre dîner de ce soir ? ShopMaker 
        propose aux entreprises de créer des magasins dans le métavers, à l’identique de leur magasin physique, 
        où leurs clients pourront y commander de vrai produit et se faire livrer chez eux.
        `
    },
    {
        image: ratsdao,
        name: " RatsDAO - Equipe H-Lfd'i",
        content: `
        Utiliser vos cryptos dans un objectif qui a du sens ? C’est ce que propose l’équipe H-Lfd’i 
        avec leur projet de plateforme de crowdfunding uniquement basé sur des devises de crypto-monnaies 
        et indexé sur le stablecoin pour en garantir leur valeur.
        `
    },
    {
        image: uroom,
        name: "UROOM - Equipe Le Perroquet",
        content: `
        UROOM est un outil qui permet aux clients réguliers de chaine d’hôtel de conserver l’ensemble de 
        leurs settings (lumières, compte netflix, …) en un clic et de les ré-appliquer à chaque hôtel et 
        chaque chambre qu’ils visiteront.
        `
    },
    {
        image: lightcom,
        name: "LightCOM - Equipe LightCom",
        content: `
        40 minutes, c’est le temps qu’un automobiliste parisien passe par jour dans les bouchons. 
        Et s’il était temps d’introduire de l’IA dans nos feux de signalisation pour réguler les flux de 
        circulation ? C’est ce que propose l’équipe LightCOM en équipant les feux d’un boîtier récupérant 
        des données pour alimenter leur IA synchronisant la circulation. Les particuliers sont également 
        dotés d’une map renseignant l’état des feux et le meilleur itinéraire en fonction des feux de 
        signalisation !
        `
    },
    {
        image: gottafityou,
        name: "Gotta Fit You - Equipe Piano",
        content: `
        Gotta Fit You c’est un jumeau numérique 3D qui vous permet de shopper en ligne tout en essayant 
        les habits. Plus question de commander la mauvaise taille ou la mauvaise coupe et de renvoyer plusieurs 
        fois vos achats.

        `

    },
    {
        image: crowsnews,
        name: "Cross News - Equipe ShowPatate",
        content: `
        Les algorithmes de recommandation nous empêchent d’être informés de manière neutre en ligne. 
        Cross News propose une application d’information neutre, qui ne se base ni sur un algorithme de 
        recommandation ni sur des tendances de lecture pour vous faire vivre l’expérience d’information 
        la moins biaisée possible.`
    },
    {
        image: tutomath,
        name: "Parcours Tuto - Equipe PassTheButter",
        content: `
        La team PassTheButter a développé une application de reconnaissance vocale pour expressions 
        mathématiques : en dictant une formule ou une expression mathématiques à votre portable, il est en 
        capacité de vous le renvoyer en écriture mathématique, qui pourra être intégré à n’importe quelle note 
        ou traitement texte. En plus, il vous en donne le résultat (oui, même pour des intégrales).`

    },
    {
        image: tutoalexa,
        name: "Parcours Tuto - Equipe WherePizza?",
        content: `
        La team WherePizza? a imaginé un assistant vocal pour les personnes ayant des difficultés à 
        accéder à la technologie. Il sera en capacité de les aiguiller mais également d’effectuer des tâches 
        pour eux, à la manière de Siri.`

    },
    {
        image: tutopres,
        name: "Parcours Tuto - Equipe Le C c'est le meilleur",
        content: `
        La team Le C c’est le meilleur a imaginé une solution de génération de texte pour les présentations. 
        L’idée : aider les personnes anxieuses lors des présentations orales en leur fournissant de l’aide 
        pour la rédaction de leur speech mais également des tutos personnalisés pour réussir leur passage 
        devant un auditoire.`

    }]

];

const themes= [
    {
        name:"Le futur d'Internet"
    }
]

const edition = {
    number:"2",
    dates:"13/14/15 MAI 2022",
    logo: Logo,
    summary:"",
    image: Image
}

const Edition2 = () =>  {

    return (
        <div>
            <Header />
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
                                    Le Hackathon GGH #2 Spring Edition 2022 a réuni <span className='font-semibold'>une soixantaine de participant en présentiel à EPITA 
                                    Paris et Lyon !</span>
                                </p>
                                <p className='mb-6 text-center lg:text-start'> 
                                    Une vingtaine d'équipe se sont lancées dans la compétition autour du thème <span className='font-semibold'>"L'internet du Futur".</span>
                                    Une dizaine de participants ont également eu la chance de suivre le parcours tuto, programme hors compétion
                                    sur le thème du "Langage Processing & User Interface". 
                                </p>
                                <p className='mb-6 text-center lg:text-start font-semibold'>Cette édition a de nouveau été possible grâce au soutien de la Société Général, partenaire de notre évènement.</p>

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
                
                    <section id="gallery" className='mt-40 mb-36'>
                        <h1 className='h1 '>Galerie</h1>
                                                  
                        <Marquee className='mt-10 mb-4'>
                            <img src={require("../../../assets/editions/2/1.jpg")} alt="" />
                            <img src={require("../../../assets/editions/2/2.jpg")} alt="" />
                            <img src={require("../../../assets/editions/2/3.jpg")} alt="" />
                            <img src={require("../../../assets/editions/2/4.jpg")} alt="" />
                            <img src={require("../../../assets/editions/2/5.jpg")} alt="" />
                            <img src={require("../../../assets/editions/2/6.jpg")} alt="" />
                            <img src={require("../../../assets/editions/2/7.jpg")} alt="" />
                            <img src={require("../../../assets/editions/2/8.jpg")} alt="" />
                            <img src={require("../../../assets/editions/2/9.jpg")} alt="" />
                            <img src={require("../../../assets/editions/2/10.jpg")} alt="" />
                        </Marquee>

                        <a href='https://flic.kr/s/aHBqjzSaTk' className='flex flex-row text-gradient btn-link cursor-pointer text-[20px] items-center'>
                                Voir toutes les photos
                                <BsArrowRight className='ml-1' />
                        </a>
                    </section>
                </div>
            <FooterSimple />
        </div>
        
    )

}

export default Edition2;

