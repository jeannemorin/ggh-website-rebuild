import React from 'react';

import {motion} from 'framer-motion';
import {fadeIn} from '../../../variants';


const Join = () => {
  return <section id='contact' className='py-16 lg:section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-[30px] uppercase text-red font-medium mb-2
            tracking-wide'>Contacte nous &</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Rejoins <br />l'aventure!</h2>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6
           p-6  items-start'>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeydfK36joocRSV8I9NJrnyURiK38XmI-0L5hRf96IyS6K2iw/viewform?embedded=true" width="640" height="550" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
          </motion.div>
      </div>
    </div>
    </section>;
};

export default Join;
