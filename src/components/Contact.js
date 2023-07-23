import React from 'react';

import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import {TypeAnimation} from 'react-type-animation'

import { FaLinkedin, FaDiscord, FaInstagram} from 'react-icons/fa'

import Connection from "../assets/connection.png";


const Contact = () => {
  return <section id='contact' className='py-4 lg:section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        
        <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='items-center flex flex-1 max-w-[320px] lg:max-w-[482px] py-6 '>
          <img src={Connection} alt='' className='items-center'/>
          
        </motion.div>
        <motion.div 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col justify-start items-center'>
          <div>
            <h4 className='text-[30px] uppercase text-red font-semibold mb-2
            tracking-wide'>Nous contacter</h4>
            <h2 className='h1 text-[45px] lg:text-[90px] font-special text-bold leading-none mb-8'>Gotta <br />Go Talk !</h2>
            <h2 className='h3 font-medium mb-1 ml-2
            tracking-wide'>
              <TypeAnimation 
                sequence={[
                  'info@gottagohack.fr',
                  1500,
                  '',
                  500,  
                ]} 
            speed={30}
            className='text-red'
            repeat={Infinity}
            /></h2>
            <h2 className='h3 font-medium ml-2 mb-0
            tracking-wide'>Sur nos réseaux :</h2>
            <div className='flex text-[50px] gap-x-6 max-w-max mx-auto
                lg:mx-0  ml-4'>
              <a className="discord shakingImg" href='https://discord.com/invite/3b73bBBEW8'>
                <FaDiscord />
              </a>
              <a className="insta shakingImg" href='https://www.instagram.com/gotta_go_hack/'>
                <FaInstagram />
              </a>
              <a className="linkedin shakingImg" href='https://www.linkedin.com/company/gotta-go-hack/'>
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
