import React from 'react';

import { Link } from 'react-scroll';

import {motion} from 'framer-motion';

import {fadeIn} from '../../variants';

import PropTypes from 'prop-types';

const Banner = ({edition, dates, image}) => {
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center 
      lg:gap-x-12'>

        {/*text*/}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h4
           variants={fadeIn('up',0.3)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once: false, amount: 0.7}}
           className='font-special font-semibold md:text-[26px] mb-6 leading-[46px] text-[18px]'>
            Archives Gotta Go Hack
           </motion.h4>
          <motion.h1 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-primary font-bold leading-[0.8] lg:text-[110px]'>
           
            HACKATHON <span>EDITION #{edition}</span>
          </motion.h1>
          <motion.div 
            variants={fadeIn('up',0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} className='bv-6 text-[36px] lg:text-[60px] font-secondary
          font semi-bold uppercase leading-[1]' >
            <span className='text-black mr-4'>{dates}</span>
          </motion.div>
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
            items-center mb-12 mx-auto lg:mx-0'
            >

            <Link to='summary' activeClass='active' 
              smooth={true} 
              spy={true} ><button className='btn btn-lg'>Découvrir les projets</button></Link>
        </motion.div>

        </div>
        {/*image*/}
        <motion.div 
          variants={fadeIn('down',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >

          <img src={image} alt='' />
        </motion.div>
      </div> 
    </div>
  </section>;
};

Banner.propTypes = {
  edition: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Banner;
