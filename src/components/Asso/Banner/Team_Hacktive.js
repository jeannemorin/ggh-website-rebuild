import React from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../../../variants'

import Hacktive from '../../../assets/team/team/hacktive.png'

const Team_Hacktive = () => {
    return (
        <section id='hacktive' className='' > 
          <div className='container mx-auto'>
            <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
            lg:gap-x-20 lg:gap-y-0 h-screen'>

              {/*img sm*/}
              <motion.div 
                variants={fadeIn('left',0.5)} 
                initial="hidden" 
                whileInView={'show'} 
                className='lg:hidden justify-center items-center flex flex-1 bg-contain bg-no-repeat
                mix-blend-lighten bg-top'
                >
      
                <img src={Hacktive} alt='' />
              </motion.div>
      
              {/*text*/}
              <motion.div 
              variants={fadeIn('right',0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='flex-1'>
                <h3 className='h3 mb-4'>TEAM HACKTIVE</h3>
                <p className='mb-6'>
                La team Hacktive est présente toute l’année pour faire fonctionner l’association et proposer des évènements toujours plus fous ! 
                </p>

                {/*button*/}
                <div className='flex gap-x-8 items-center'>
                        <button className='btn btn-lg'>Nous rejoindre</button>
                </div>
              </motion.div>

              {/*img*/}
              <motion.div 
                variants={fadeIn('left',0.3)} 
                initial="hidden" 
                whileInView={'show'} 
                className='hidden lg:flex flex-1 bg-contain bg-no-repeat
                mix-blend-lighten bg-top'
                >
      
                <img src={Hacktive} alt='' />
              </motion.div>
            </div>
          </div>
        </section>)
};

export default Team_Hacktive;