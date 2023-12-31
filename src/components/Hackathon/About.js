import React from 'react';

import {motion } from 'framer-motion'

import {fadeIn} from '../../variants'

import Code from '../../assets/hackathon/code.png'

const About = () => {
    return (
        <section id='about' className='section' > 
          <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row lg:items-center 
            lg:gap-x-32 gap-y-12 h-screen'>
              {/*img*/}
              <motion.div 
                variants={fadeIn('right',0.5)} 
                initial="hidden" 
                whileInView={'show'} 
                className='hidden lg:flex bg-contain bg-no-repeat
                mix-blend-lighten '
                >
      
                <img src={Code} alt='woodchack' />
              </motion.div>
      
              {/*text*/}
              <motion.div 
              variants={fadeIn('left',0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='flex flex-1 flex-col lg:gap-y-4'>
                <h3 className='h1 text-accent lg:mb-4'>C'EST QUOI UN HACKATHON ?</h3>
                <div>
                  <p className='mb-3'>
                  Pendant <span className='font-semibold'>2 jours et 2 nuits</span>, des équipes de 2-4 étudiants travaillent pour <span className='font-semibold'> prototyper et présenter un projet innovant </span> autour d’une problématique. <br />
                  </p>
                  <p className='lg:mb-3 mb-8'>Accompagnées par des coachs et des workshops, ces équipes créent un produit concret ainsi que son business plan, comme une vraie startup ! Le hackathon se termine 
                  sur une session de pitch et de demo devant un jury de professionnels.
                  </p>
                </div>

                {/*button*/}
                <div className='flex gap-x-8 items-center'>
                  <a href='https://www.helloasso.com/associations/gotta-go-hack/evenements/hackathon-gotta-go-hack-edition-2-2' smooth={true}><button className='btn btn-lg'>Participer</button></a>

                </div>
              </motion.div>
            </div>
          </div>
        </section>)
};

export default About;