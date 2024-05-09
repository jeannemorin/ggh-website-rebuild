import React from 'react';

import Photo from '../../assets/team/avatar.svg';
import {motion } from 'framer-motion'

import {fadeIn} from '../../variants'

const panel = [
    {
        name: 'A VENIR',
        photo: Photo,
        role: 'Dévoilé bientôt',
    },
    {
        name: 'A VENIR',
        photo: Photo,
        role: 'Dévoilé bientôt',
    },
    {
        name: 'A VENIR',
        photo: Photo,
        role: 'Dévoilé bientôt',
    },
    {
        name: 'A VENIR',
        photo: Photo,
        role: 'Dévoilé bientôt',
    },
{
        name: 'A VENIR',
        photo: Photo,
        role: 'Dévoilé bientôt',
    },
    {
        name: 'A VENIR',
        photo: Photo,
        role: 'Dévoilé bientôt',
    },
    {
        name: 'A VENIR',
        photo: Photo,
        role: 'Dévoilé bientôt',
    },]

const Jury = () => {
    return (
    <section id='jury' className='section'> 
    <div className='container mx-auto'>
      <div className='h-screen'>
        {/*titre*/}
        <motion.div 
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: true, amount: 0.3}}
          className=''>
          <h1 className='h1 text-red'>Notre jury</h1>
          <h2 className='h2 mb-4'>Découvrez le panel de juré de l'édition !</h2>
          
        </motion.div>

        {/*image*/}
        <motion.div 
        variants={fadeIn('left',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.3}}
        className='flex-1'>
          
        <Jury_Round members={panel} />
        </motion.div>

        </div>
      </div>
    </section>)
}

export default Jury;

const Jury_Round = ({members}) => {

    return (
        <div className='py-12'>
            <div className="container mx-auto">
                <div className='grid grid-cols-2 gap-y-10 lg:grid-cols-4'>

                    {members.map((member, index) => {  
                        return (<div className='flex flex-col items-center justify-center' key={index}>
                            <img src={member.photo} alt='' className='w-[160px]'/>
                            <h3 className='text-blue font-bold font-special py-4'>{member.name}</h3>
                            <h3>{member.role}</h3>
                        </div>)
                        })}
                </div>

            </div>
        </div>
    )
};