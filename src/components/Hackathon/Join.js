import React from "react";

import {motion } from 'framer-motion'

import {fadeIn} from '../../variants'

const Join = () => {
    return (
    <section id="prix" className='section'>
      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row gap-x-12'>
          {/*title of the section*/}
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 mb-12 lg:mb-0'>

            <h1 className='h1 text-accent mb-16'>POURQUOI PARTICIPER ?</h1>
            <p className="h3 leading-8">D’abord apprendre ! Le Hackathon ce n’est pas une question de niveau c’est une question d’envie d’apprendre beaucoup, par soi même, en un lapse de temps très réduit. En plus de ça, les participants sont accompagnés par des coachs pro tout le week-end  📚 💪</p>
          </motion.div>


          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 w-full'>

            <p className="h3 leading-8"> Pour mettre un premier pas dans l’entrepreneuriat ! Le Hackathon GGH vise à initier et donner envie aux étudiants de se lancer dans l’aventure entrepreneurial en créant des espaces où l’on peut échouer, beaucoup, avant de se lancer dans le grand bain 🚀</p>
            <p className="h3 leading-8">Pour venir se mesurer aux étudiants de d’autres écoles d’info ou d’ingénieurs ! Et montrer de quel bois on se chauffe dans votre école 🔥 
                                            Chaque année une quinzaine d’école sont représentées dans la compétition.</p>         
            <p className="h3 leading-8">Et enfin pour passer un super week-end de folie 🎉 Pizza, Goodies, Animation, Rencontre seront au rendez-vous dans un cadre bon enfant et étudiant 🎆</p>
          </motion.div>
        </div>
      </div>
  
    </section>
    );
  };
  
  export default Join;