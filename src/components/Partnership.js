import React from 'react';

import {motion } from 'framer-motion'

import {fadeIn} from '../variants'
import { Link } from 'react-scroll';

import Header from './Header_Nav/HeaderTopTwoColors';
import FooterSimple from './Footer/FooterSimple';
import UnderHeader from './Under_header';

import Contact from "./Contact";
import Hacktive from '../assets/flower.png'


import Marquee from "react-fast-marquee";

import socgen from '../assets/partner/socgen.png'
import massa from "../assets/partner/massa.png"
import qonto from "../assets/partner/qonto.png"
import slb from "../assets/partner/slb.png"
import datadog from "../assets/partner/datadog.png"

const Partnership = () => {
  return (
    <div>
        <Header />
        <UnderHeader/>
        <section id='hacktive' className='' > 
          <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row lg:items-center 
            lg:gap-x-20 lg:gap-y-0 h-screen'>

              {/*img sm*/}
              <motion.div 
                variants={fadeIn('left',0.5)} 
                initial="hidden" 
                whileInView={'show'} 
                className='hidden lg:flex flex-1 bg-contain bg-no-repeat
                bg-top'
                >
      
                <img src={Hacktive} alt='' />
              </motion.div>
      
              {/*text*/}
              <motion.div 
              variants={fadeIn('right',0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='flex flex-col flex-1 lg:items-start items-center'>
                <h3 className='h1 text-accent lg:mb-4'>DEVENIR PARTENAIRE</h3>
                <p className='mb-6 text-center lg:text-start'>
                Gotta Go Hack est à la recherche de partenaire tout au long de l'année pour soutenir l'innovation et l'entrepreneuriat sur les campus ingénieur. Que ce soit du <span className='font-semibold'> support financier, matériel ou humain, nous sommes à l'écoute de toutes vos propositions.</span>
                </p>
                <p>Envie de soutenir notre Hackathon et proposer vos propres problématiques ? Vous souhaitez intervenir dans des conférences ou des afterworks sur notre campus ? On a hâte d'en discuter avec vous !
                </p> <p><span className='font-semibold'>Vous êtes une école ?</span> L'association peut venir intervenir ou organiser des évenèments pour vos étudiants !
                </p>

                {/*button*/}
                <div className='flex gap-x-8 items-center mt-6'>
                  <Link to='contact' smooth={true}><button className='btn btn-lg'>Devenir Partenaire</button></Link>
                </div>
              </motion.div>
            </div>


            <div className=''>
              <h1 className='flex h1 items-center justify-center mb-10'>ILS NOUS FONT CONFIANCE</h1>
          
                <Marquee className='hidden lg:flex lg:py-8 lg:align-middle' pauseOnHover='true' speed='150' autoFill='true'>
                    <img src={socgen} alt='' className='w-80 mr-20 align-middle'/>
                    <img src={massa} alt='' className='w-60 mr-20 align-middle'/>
                    <img src={qonto} alt='' className='w-80 mr-20 align-middle'/>
                    <img src={slb} alt='' className=' mr-20 align-middle'/>
                    <img src={datadog} alt='' className='w-80 mr-20 align-middle'/>
                </Marquee>
                
              </div>
            </div>
        </section>

        <Contact />
        <FooterSimple />
   </div>
  );
};

export default Partnership;