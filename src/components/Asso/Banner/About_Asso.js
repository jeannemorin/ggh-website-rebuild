import React from 'react';

import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer'

import {motion } from 'framer-motion'

import {fadeIn} from '../../../variants'

import Team from '../../../assets/sarah.png'

import { Link } from 'react-scroll';


const About_Asso = () => {
  const { ref, inView} = useInView({ });
  
  return (
  <section id='about' className='section' ref={ref}> 
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center
      lg:gap-x-10 lg:gap-y-0 h-screen'>
        {/*img*/}
        <motion.div 
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: true, amount: 0.3}}
          className='hidden lg:flex flex-1 bg-contain bg-no-repeat h-screen
          bg-top'
          >

          <img src={Team} alt='' />
        </motion.div>

        {/*text*/}
        <motion.div 
        variants={fadeIn('left',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.3}}
        className='flex-1'>
          <h1 className='h1 text-red'>à propos</h1>
          <h2 className='h2 mb-4'>Gotta Go Hack, l'association pour entreprendre et innover
          à EPITA.</h2>
          <p className='mb-8'>
          Depuis février 2021, Gotta Go Hack promeut l'innovation et l'entrepreneuriat auprès des étudiants ingénieurs, notamment à travers des Hackathons. 
          </p>
          {/*stats*/ }
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='h1 text-red leading-none mb-2'>
                {
                  inView ? 
                  <CountUp  start={0} end={5} duration={5} /> :
                  null}
              </div>
              <div className='font-primary text-[16px] tracking-[2px]'>
                Hackathons <br />
                en 2 ans
              </div>
            </div>
            <div>
              <div className='h1 text-red leading-none mb-2'>
                {
                  inView ? 
                  <CountUp start={0} end={3} duration={5} /> :
                  null}
              </div>
              <div className='font-primary text-[16px] tracking-[2px]'>
                Campus <br />
                Différents
              </div>
            </div>
            <div>
              <div className='h1 text-red leading-none mb-2'>
                {
                  inView ? 
                  <CountUp  start={0} end={200} duration={5} /> :
                  null}
                  +
              </div>
              <div className='font-primary text-[16px] tracking-[2px]'>
                Participants <br />
                Comblés
              </div>
            </div>
          </div>
          {/*button*/}
          <div className='flex gap-x-8 items-center'>
                  <Link to='contact' smooth={true}><button className='btn btn-lg'>Nous rejoindre</button></Link>
                  <Link to='hacktive'  activeClass='active' smooth={true} className='cursor-pointer text-gradient btn-link'>Découvrir l'équipe</Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About_Asso;
