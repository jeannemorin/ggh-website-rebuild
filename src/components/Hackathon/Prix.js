import React from "react";

import {motion } from 'framer-motion'
import { fadeIn } from '../../variants';

const prize = [
    {
        name: "Récompenses un",
        description : "le projet qui aura gagner ça"
    },
    {
        name: "Récompenses un",
        description : "le projet qui aura gagner ça"
    },
    {
        name: "Récompenses un",
        description : "le projet qui aura gagner ça"
    },
]


const Prix = () => {
    return (
    <section id="prix" className='section'>
      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row'>
          {/*title of the section*/}
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 mb-12 lg:mb-0'>

            <h1 className='h1 text-accent mb-6'>PRIX</h1>
            <h3 className='h3 max-w-[455px] mb-16 leading-8'>Une description de ce qu'on veut dire pour les prix cashprize etc...</h3>

          </motion.div>


          {/*prize*/}
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>

            {/*prize list*/}
            <div>
              {prize.map((item, index) => {
                return (
                <div>
                  <div className='border-b border-black h-[146px] mb-[38px] flex'key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='h3 font-secondary font-semibold mb-6'>{item.name}</h4>
                      <p className='font-secondary leading-tight'>{item.description}</p>
                    </div>                    
                  </div>
                </div>)
              })}
            </div>
          </motion.div>
        </div>
      </div>
  
    </section>
    );
  };
  
  export default Prix;