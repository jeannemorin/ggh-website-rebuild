import React from 'react';

import {BsArrowUpRight} from 'react-icons/bs'
import {motion } from 'framer-motion'
import { fadeIn } from '../../variants';

import PropTypes from 'prop-types';


const Events = ({events, title, description}) => {
    return (
    <section id='events' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/*text & image*/}
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-events lg:bg-bottom bg-no-repeat 
          mix-blend-lighten mb-12 lg:mb-0'>

            <h2 className='h1 text-accent mb-6'>{title}</h2>
            <h3 className='h3 max-w-[455px] mb-16 leading-8'>{description}</h3>

          </motion.div>


          {/*events*/}
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            {/*event list*/}
            <div>
              {events.map((event, index) => {
                return <a href={event.href} smooth={true}>
                  <div className='border-b border-black h-[146px] mb-[38px] flex'key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-secondary font-semibold mb-6'>{event.name}</h4>
                      <p className='font-secondary leading-tight'>{event.description}</p>
                    </div>
                    
                    {event.href ? <div className='flex flex-col flex-1 items-center'>
                      <a href={event.href} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href={event.href} className='text-gradient text-sm'>{event.link}</a>
                    </div> :
                    <div></div>}
                    
                  </div>
                </a>
                
              })}
            </div>
          </motion.div>
        </div>
      </div>
  
    </section>
    );
  };
  
  export default Events;

  Events.propTypes = {
    events: PropTypes.object.isRequired
}