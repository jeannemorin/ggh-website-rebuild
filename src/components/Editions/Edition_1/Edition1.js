import React from 'react'

import Banner from "../Banner"

import Header from '../../Header_Nav/HeaderTopTwoColors'
import FooterSimple from '../../Footer/FooterSimple'
import Summary from '../Summary'
import Projects from '../Projects'

import Logo from "../../../assets/editions/1.png";

import lfl from '../../../assets/teams/1/lfl.webp';
import foodcycle from '../../../assets/teams/1/foodcycle.webp';
import assogrow from '../../../assets/teams/1/assogrow.webp';
import croposphere from '../../../assets/teams/1/croposphere.webp';
import dokini from '../../../assets/teams/1/dokini.webp';
import feedtheworld from '../../../assets/teams/1/feedtheworld.webp';
import flago from '../../../assets/teams/1/flago.webp';
import lebonplant from '../../../assets/teams/1/lebonplant.webp';
import monkeys from '../../../assets/teams/1/monkeys.webp';
import proximiam from '../../../assets/teams/1/proximiam.webp';
import restauck from '../../../assets/teams/1/restauck.webp';
import systemedx from '../../../assets/teams/1/systemeDX.webp';
import totallyspes from '../../../assets/teams/1/totallyspes.webp';
import treeflop from '../../../assets/teams/1/treeflop.webp';
import yedi from '../../../assets/teams/1/yedi.webp';
import bubble from '../../../assets/teams/1/bubbleteam.webp';

const projects = [
    [
    {
        image: lfl,
        name: "Laids Fruit & Légume - GottAgro",
        content: `
        Une plateforme qui permet de mettre en relation les agriculteurs et les consommateurs pour écouler
        les stocks de fruits et légumes impropres à la distribution du fait de leur esthétiques. 35% des récoltes
        chaque année sont laissés de côté car les fruits et légumes sont jugés trop laids.`
    },
    {
        image: treeflop,
        name: "La BoboBox - TreeFlop",
        content: `
        Un projet de jardinière connectée à destination des toits de bâtiment d'entreprise et d'école. L'équipe
        TreeFlop nous propose ici la nature 2.0 : on plante, et on cueille lorsque c'est mûr ! La BoboBox s'occupe
        du reste.
        `
    },
    {
        image: assogrow,
        name: "AssoGrow - Jacques Houzit",
        content: `
        Un logiciel à destination de la Banque Alimentaire, pour les aider à centraliser les demande d'aide faites par
        des bénéficaires, les possibilités d'aide proposées par chacun de leurs partenaires et les quantités d'offre qu'ils
        peuvent encore fournir.
        `
    },
    {
        image: restauck,
        name: "Restauck - Les Immortels",
        content: `
        Une application web permettant aux restaurants et aux commerces de proximité de prédire les stocks nécessaires dans
        les prochaines semaines. L'analyse se base sur les données du commerçant ainsi qu'un questionnaire de feedback client
        qui leur permet d'annoncer au magasin quels produits les intéressent à quelle période.
        `
    },
    {
        image: foodcycle,
        name: "FoodCycle - 4earth",
        content: `
        Cette application permet au consomateur une vision transparente quant à  la provenance des produits qu'il achète
        en grande surface. Tout le voyage, des matières premières à la transformation finale de l'aliment est recensé
        et accessible.

        `
    },
    {
        image: proximiam,
        name: "Proxi'Miam - Les Fermiers d'EPITECH",
        content: `
        Un moteur de recherche à destination des consommateurs, pour trouver les magasins de proximité
        et se renseigner sur la vente de produits locaux.
        `
    },
    {
        image: totallyspes,
        name: " SeaFish - Totally Spés",
        content: `
        Un web-Service à destination des professionels de la pêche responsable. L'idée est de pouvoir réaliser son itinéraire
        de pêche sur le software, qui rassemble des données telles les marées, la pollution mais surtout
        les zones dans lesquelles trop de poisson ont été récemment pêchés et ainsi lutter contre la surpêche !
        `
    },
    {
        image: flago,
        name: "Flago, le frigo de demain - Nuckfix",
        content: `
        Un frigo connecté qui détecte automatiquement les aliments qu'il contient et propose de multiple
        option pour lutter contre le gaspillage alimentaire (recette de cuisine, notification de peremption, etc...)
        `
    },
    {
        image: dokini,
        name: "Dokini - BRA K C",
        content: `
        Un logiciel à destination des cantines scolaires qui suggèrent des menus locaux et de saison
        adaptés aux âges des enfants, pour une alimentation collective ayant moins d'impact sur l'environnement.
        `
    },
    {
        image: croposphere,
        name: "Crop'O'Sphère - AthmosFood",
        content: `
        Un jeu de simulation aux graphisme méticuleux : on incarne un tracteur qui gère ses champs
        et doit nourrir différentes villes en famine. L'expérience de jeu est tournée autour des questions
        de surproduction et d'inégalités face aux ressources alimentaires.
        `
    },
    {
        image: bubble,
        name: " HearEatIs - Bubble Team",
        content:`
        Une application pensée sous forme de jeu permettant aux utilisateurs de partager leurs recettes à proximité
        tout en encourageant les recettes à base de produits locaux et de saison à travers des gratifications virtuelles.
        `
    },
    {
        image: systemedx,
        name: "Apocallyptic Farmer - SystèmeDX",
        content: `
        Un jeu de simulation de gestion de ferme en 2D post apocalyptique.`

    },
    {
        image: lebonplant,
        name: "Le Bon PlanT - We Fell In Code In October",
        content: `
        Une application visant à réunir les anciens et les nouveaux passionés de jardinage et d'agriculture sous toutes ces formes. Le Bon Plant
        regroupe une market place, tournée vers le troc de graines et de produits agricoles, un forum ainsi qu'une map recenssant
        les jardins collectifs à proximité.`
    },
    {
        image: monkeys,
        name: " - Monkeys",
        content: `
        Un site web qui analyse les goûts de ces utilisateurs par le biais de recettes renseignées
        pour leur suggérer de nouvelles recettes basées sur des ingrédients de saison.`

    },
    {
        image: feedtheworld,
        name: "Feed The World - BA_RO²",
        content: `
        Quizz interactif en ligne, Feed The World permet d'en apprendre plus sur les recettes du monde entier ainsi
        que les associations dans chaque pays qui luttent contre la faim et la malnutrition.`
    },
    {
        image: yedi,
        name: "Yedi - Equipe en Parcours Tuto sur le thème 'E-accessibilité' ",
        content: `
        Une application alliant l'eye-tracking et le speech-to-text pour permettre aux personnes
        tétraplégiques ou atteintes d'autres handicaps physique d'utiliser un ordinateur
        sans avoir besoin de bouger. Pouvoir contrôler un ordinateur juste à l'aide de ses yeux
        et de sa bouche peut permettre d'effectuer toutes sortes de tâches de bureautique
        sans aucune difficulté !
        `
    }]
];

const themes= [
    {
        name:"Planète et Alimentation"
    }
]

const edition = {
    number:"1",
    dates:"26/27/28 NOV 2021",
    logo: Logo,
    summary:"Le Hackathon winter edition #1 est notre première édition présentielle ! Elle a réuni une cinquantaine de participant sur le campus d'EPITA Kremlin-Bicêtre et une vingtaine à distance pour une nouvelle compétition autour du thème 'Planète et Alimentation'. Au programme, workshops, réveil aérobic et pizza mais aussi une toute nouvelle opportunité : le Parcours Tuto. 6 participants ont eu la chance de suivre ce programme hors compétition autour de l'E-accessibilité. Cette édition a été possible grâce au soutien de la Société Général, sponsor de l'évènement.",
    image: Image
}

const Edition1 = () =>  {

    return (
        <div>
            <Header />
            <Banner edition={edition.number} dates={edition.dates} image={Logo}/>
            <Summary summary={edition.summary} image={edition.number} />
            <Projects projects={projects} themes={themes} />
            <FooterSimple />
        </div>
        
    )

}

export default Edition1;

