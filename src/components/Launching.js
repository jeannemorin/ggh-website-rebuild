import React from 'react';

import { Link } from 'react-scroll';

import Image from '../assets/rocket.png';

import {FaInstagram, FaDiscord, FaLinkedin } from 'react-icons/fa';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants';

const Banner = () => {
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
            Site en reconstruction avant le
           </motion.h4>
          <motion.h1 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
           
            HACKATHON <span>EDITION #4</span>
          </motion.h1>
          <motion.div 
            variants={fadeIn('up',0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} className='bv-6 text-[36px] lg:text-[60px] font-secondary
          font semi-bold uppercase leading-[1]' >
            <span className='text-black mr-4'>10/11/12 NOV 2023</span>
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

            <Link to='contact' activeClass='active' 
              smooth={true} 
              spy={true} ><button className='btn btn-lg'>Nous contacter</button></Link>
            <Link to='contact' activeClass='active' 
              smooth={true} 
              spy={true} className='text-gradient btn-link cursor-pointer text-[20px]'>Devenir Partenaire</Link>
        </motion.div>

        {/* socials*/}
        <motion.div 
        variants={fadeIn('up',0.7)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='flex text-[24px] gap-x-6 max-w-max mx-auto
        lg:mx-0'>
          <a href='https://discord.com/invite/3b73bBBEW8'>
            <FaDiscord />
          </a>
          <a href='https://www.instagram.com/gotta_go_hack/'>
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com/company/gotta-go-hack/'>
            <FaLinkedin />
          </a>
        </motion.div>
        </div>
        {/*image*/}
        <motion.div 
          variants={fadeIn('down',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >

          <img src={Image} alt='' />
        </motion.div>
      </div> 
    </div>
  </section>;
};

export default Banner;
