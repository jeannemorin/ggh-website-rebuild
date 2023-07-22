import React from 'react';

import {motion } from 'framer-motion'

import {fadeIn} from '../../../variants'

import { Link } from "react-scroll";

import Woodchack from '../../../assets/team/team/woodchack.png'

const Team_Hacktive = () => {
    return (
        <section id='hacktive' className='section' > 
          <div className='container mx-auto'>
            <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
            lg:gap-x-20 lg:gap-y-0 h-screen'>
              {/*img*/}
              <motion.div 
                variants={fadeIn('right',0.5)} 
                initial="hidden" 
                whileInView={'show'} 
                className='lg:flex justify-center items-center flex-1 bg-contain bg-no-repeat
                mix-blend-lighten '
                >
      
                <img src={Woodchack} alt='woodchack' />
              </motion.div>
      
              {/*text*/}
              <motion.div 
              variants={fadeIn('left',0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='flex-1'>
                <h3 className='h3 mb-4'>TEAM WOODCHACK</h3>
                <p className='mb-6'>
                La team Woodchack est l’équipe de staff de l’association. Ses membres sont présents sur nos évènements tout au long de l’année et dans toute la France. 
                </p>

                {/*button*/}
                <div className='flex gap-x-8 items-center'>
                  <Link to='contact' smooth={true}><button className='btn btn-lg'>Nous rejoindre</button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>)
};

export default Team_Hacktive;