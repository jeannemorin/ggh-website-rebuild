import React from 'react';

import {motion } from 'framer-motion'

import {fadeIn} from '../../variants'

import PropTypes from 'prop-types';


const Summary = ({summary, image }) => {

    const src = require(`../../assets/editions/${image}.png`);

    return (
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
      
                <img src={src} alt='' />
              </motion.div>
      
              {/*text*/}
              <motion.div 
              variants={fadeIn('right',0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='flex flex-col flex-1 lg:items-start items-center lg:gap-y-6 lg:mt-0 mt-6'>
                <h1 className='h1 lg:mb-4 text-accent'>EN BREF</h1>
                <p className='mb-6 text-center lg:text-start'>{summary}</p>

              </motion.div>

              {/*img*/}
              <motion.div 
                variants={fadeIn('left',0.3)} 
                initial="hidden" 
                whileInView={'show'} 
                className='hidden lg:flex  flex-1 bg-contain bg-no-repeat
                mix-blend-lighten bg-top'
                >
                <img src={src} alt='' />
              </motion.div>
            </div>
          </div>
        </section>)
};

Summary.propTypes = {
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Summary;