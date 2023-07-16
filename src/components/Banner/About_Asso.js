import React from 'react';

import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer'

import {motion} from 'framer-motion'

import {fadeIn} from '../../variants'

import Team from '../../assets/team.png'


const About_Asso = () => {
  const { ref, inView} = useInView({ });
  
  return (
  <section id='about' className='section' ref={ref}> 
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*img*/}
        <motion.div 
          variants={fadeIn('right',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          className='hidden lg:flex flex-1 bg-contain bg-no-repeat h-[640px] 
          mix-blend-lighten bg-top'
          >

          <img src={Team} alt='' />
        </motion.div>

        {/*text*/}
        <motion.div 
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>A propos</h2>
          <h3 className='h3 mb-4'>Gotta Go Hack, l'association pour entreprendre et innover
          à EPITA.</h3>
          <p className='mb-6'>
          Depuis février 2021, Gotta Go Hack promeut l'innovation et l'entrepreneuriat auprès des étudiants ingénieurs, notamment à travers des Hackathons. 
          </p>
          {/*stats*/ }
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? 
                  <CountUp start={0} end={5} duration={3} /> :
                  null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Hackathons <br />
                en 2 ans
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? 
                  <CountUp start={0} end={3} duration={3} /> :
                  null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Campus <br />
                Différents
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? 
                  <CountUp start={0} end={200} duration={3} /> :
                  null}
                  +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Participants <br />
                Comblés
              </div>
            </div>
          </div>
          {/*button*/}
          <div className='flex gap-x-8 items-center'>
                  <button className='btn btn-lg'>Nous rejoindre</button>
                  <a href='#' className='text-gradient btn-link'>Découvrir l'équipe</a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About_Asso;
