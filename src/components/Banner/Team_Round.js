import React from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../../variants'

const Team_Round = ({members}) => {

    return (
        <div className='py-12'>
            <div className="container mx-auto">
                <motion.div 
                variants={fadeIn('bottom',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='grid grid-cols-2 gap-y-10 lg:grid-cols-4'>

                    {members.map((member, index) => {  
                        return (<div className='flex flex-col items-center justify-center' key={index}>
                            <img src={member.photo} alt='' className='w-[160px]'/>
                            <h3 className='text-accent'>{member.name}</h3>
                            <h3>{member.role}</h3>
                        </div>)
                        })}
                </motion.div>

            </div>
        </div>
    )
};

export default Team_Round;