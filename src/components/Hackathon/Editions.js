import React from 'react';

import {motion } from 'framer-motion'

import { fadeIn } from '../../variants';

import img1 from '../../assets/editions/1.png';
import img2 from '../../assets/editions/2.png';
import img3 from '../../assets/editions/3.png';

const Editions = () => {
  return <section id='work' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/*text*/}
          <div>
            <h2 className='h2 leading-tight text-accent'>Les dernières <br />
            éditions.</h2>

            {/*Max 6 ligns of text to align the cards*/}
            <p className='max-w-sm mb-10'> Depuis 2021, le Hackathon Gotta Go Hack rythme le campus EPITA EPITECH parisien avec 2 éditions par an. Pour chaque édition, nous travaillons avec différents partenaires et proposons des thèmes uniques. Découvrez notre folle aventure depuis ses débuts et retrouvez tous les projets présentés.</p>
            <button className='btn btn-lg'>Toutes les éditions</button>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl '>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>      
            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>EDITION #2</span>
              </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3x1 text-white'>13-15 mai 2022</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12'>
        {/*image*/}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl '>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>      
            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>EDITION #3</span>
              </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3x1 text-white'>18-20 nov 2022</span>
            </div>
          </div>
        {/*image*/}
          <div className='group relative overflow-hidden border-2 
            border-white/50 rounded-xl '>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>      
              </div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>EDITION #1 </span>
                </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3x1 text-white'>26-28 nov 2021</span>
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Editions;
