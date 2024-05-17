import React from 'react';

import { Link } from 'react-scroll';

import Image from '../../assets/flower.png';


import {motion} from 'framer-motion';

import {fadeIn} from '../../variants';

const Hero = () => {
  return <section id='hero' className='section'>
    <div className="container mx-auto">
      <div className='mt-10 flex flex-col gap-y-8 lg:flex-row lg:items-center 
      lg:gap-x-12'>

        {/*text*/}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          
          <motion.h1 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 

            className=''>
            <h1 className='font-primary font-bold leading-[0.8] text-[130px]'>NIGHT 4</h1>
            <h1 className='font-primary font-bold leading-[0.8] text-[83px]'>INNOVATION</h1>
            
          </motion.h1>
          
          <motion.div 
            variants={fadeIn('up',0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} className='bv-6 text-[50px] font-secondary
          font semi-bold uppercase leading-[1]' >
            <span className='text-black mr-4'>23 MAI 2024</span>
          </motion.div>
          <motion.h4
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='font-special font-semibold md:text-[26px] leading-[1] mt-12 text-[18px]'>
                Une soirée pour rencontrer des startups innovantes
           </motion.h4>
          <motion.p 
          variants={fadeIn('up',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='mb-8 max-w-lg mx-auto lg:mx-0'>
          </motion.p>
            <motion.div 
                variants={fadeIn('up',0.6)} 
                initial="hidden" 
                whileInView={'show'} 
                viewport={{once: false, amount: 0.7}} 
                className='flex max-w-max gap-x-6 
                items-center mb-12 mx-auto lg:mx-0 '
                >
                    <Link to='startups' activeClass='active' 
                    smooth={true} 
                    spy={true} className=''><button className='btn btn-lg'>Les Startups</button></Link>
            </motion.div>
        </div>
        {/*image*/}
        <motion.div 
          variants={fadeIn('down',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          className='hidden lg:flex flex-1'
          >

          <img src={Image} alt='' />
        </motion.div>
      </div> 
    </div>
  </section>;
};

export default Hero;