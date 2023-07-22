import React from 'react';

import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

import { FaLinkedin, FaDiscord, FaInstagram} from 'react-icons/fa'


const Contact = () => {
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
            <h4 className='text-x1 uppercase text-accent font-medium mb-2
            tracking-wide'>Nous contacter</h4>
            <h2 className='text-[45px] lg:text-[90px] text-bold mb-12'>Gotta <br />Go Talk !</h2>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex justify-start items-center'>
          <div>
            <h2 className='h3 font-medium mb-2
            tracking-wide'>info@gottagohack.fr</h2>
            <h2 className='h3 font-medium mb-2
            tracking-wide'>Sur nos réseaux :</h2>
            <div className='flex text-[50px] gap-x-6 max-w-max mx-auto
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>;
};

export default Contact;
