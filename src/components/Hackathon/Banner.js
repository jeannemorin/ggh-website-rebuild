import React from 'react';

import Marquee from "react-fast-marquee";

import { Link } from 'react-scroll';

import Image from '../../assets/hackathon/edition5.png';

import Metro from "../../assets/hackathon/metro7.svg";
import Tram from "../../assets/hackathon/tram3.svg";

import {motion} from 'framer-motion';

import {fadeIn} from '../../variants';

const Banner = () => {
  return <section id='hero' className='section'>
    <div className='flex flex-col'>
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
            <h1 className='text-[55px] font-primary font-bold leading-[0.8] lg:text-[110px]'>HACKATHON</h1>
            <h1 className='text-[35px] font-primary font-bold leading-[0.8] lg:text-[70px]'>GOTTA GO HACK #5</h1>
            
          </motion.h1>
          
          <motion.div 
            variants={fadeIn('up',0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} className='bv-6 text-[36px] lg:text-[60px] font-secondary
          font semi-bold uppercase leading-[1]' >
            <span className='text-black mr-4'>14/15/16 MAI 2024</span>
          </motion.div>
          <motion.h4
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='font-special font-semibold md:text-[26px] leading-[1] mt-12 text-[18px]'>
                Campus EPITA - EPITECH Paris
                <div className='flex flex-row gap-x-2'>
                    Porte d'Italie -
                    <img src={Metro} alt='' className='h-[30px]'/> 
                    <img src={Tram} alt='' className='h-[30px]'/> 
                </div>
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

                <a href='https://www.helloasso.com/associations/gotta-go-hack/evenements/hackathon-gotta-go-hack-edition-5'>
                <button className='btn btn-lg shakingImg discord'>Participer</button></a>
                <Link to='vision' activeClass='active' 
                smooth={true} 
                spy={true} className='text-gradient btn-link cursor-pointer text-[20px]'>En savoir plus</Link>
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
    <Marquee className='bg-black' pauseOnHover='true' speed='400' autoFill='true' direction='right' gradient="true" delay="5">
            <h1 className='h1 text-white m-0'>h d'innovation et d'animation - 48</h1>
    </Marquee>
    <Marquee className='' pauseOnHover='true' speed='150' autoFill='false' gradient='true' delay="5">
            <h1 className='h1 m-0'>Pour tous les étudiants ingénieur ou informatique ! </h1>
    </Marquee>
    
    </div>
  </section>;
};

export default Banner;