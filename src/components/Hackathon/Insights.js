import React from 'react'

import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer'
/*<div className='grid grid-col-2 gap-y-12'>
                            <div className='text-[65px] font-bold text-red font-primary'>
                                {
                                inView ? 
                                    <CountUp start={0} end={0} duration={5} /> :
                                null}%
                            </div>
                            <h3 className='text-[50px] font-secondary'> dormir </h3>
                        </div>

                        <div className='grid grid-col-2 gap-y-12'>
                            <div className='text-[65px] font-bold text-red font-primary'>
                                {
                                inView ? 
                                    <CountUp start={0} end={33} duration={4} /> :
                                null}%
                            </div>
                            <h3 className='text-[50px] font-secondary'> créativité </h3>
                        </div>

                        <div className='grid grid-col-2 gap-y-12 '>
                            <div className='text-[65px] font-bold text-red font-primary'>
                                {
                                inView ? 
                                    <CountUp delay={3} start={0} end={19} duration={5} /> :
                                null}%
                            </div>
                            <h3 className='text-[50px] font-secondary'> coder </h3>
                        </div>
                    
                    <div className='grid grid-col-2 gap-y-12 '>
                            <div className='text-[65px] font-bold text-red font-primary'>
                                {
                                inView ? 
                                    <CountUp delay={10} start={0} end={8} duration={5} /> :
                                null}%
                            </div>
                            <h3 className='text-[50px] font-secondary'> junkfood </h3>
                        </div>

                        <div className='grid grid-col-2 gap-y-12 '>
                            <div className='text-[65px] font-bold text-red font-primary'>
                                {
                                inView ? 
                                    <CountUp start={0} end={15} duration={5} /> :
                                null}%
                            </div>
                            <h3 className='text-[50px] font-secondary'> babyfoot </h3>
                        </div>

                        <div className='grid grid-col-2 gap-y-12 '>
                            <div className='text-[65px] font-bold text-red font-primary'>
                                {
                                inView ? 
                                    <CountUp start={0} end={25} duration={5} /> :
                                null}%
                            </div>
                            <h3 className='text-[50px] font-secondary'> bières </h3>
                        </div>
                    </div>
    )*/

const Insights = () => {
    const { ref, inView} = useInView({ });

    return(
        <div className='py-12'>
            <div className='container mx-auto' ref={ref}>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-y-12 justify-center items-center'>
                    <div className='grid grid-cols-2 gap-y-12 gap-x-5'>
                        <div className='text-[65px] font-bold text-red font-primary flex justify-end '>
                            {
                            inView ? 
                                <CountUp start={0} end={0} duration={5} /> :
                            null}%
                        </div>
                        <h3 className='text-[50px] font-secondary'> dormir </h3>
                        <div className='text-[65px] font-bold text-red font-primary flex justify-end'>
                            {
                            inView ? 
                                <CountUp start={0} end={20} duration={5} /> :
                            null}%
                        </div>
                        <h3 className='text-[50px] font-secondary'> créativité </h3>
                        <div className='text-[65px] font-bold text-red font-primary flex justify-end'>
                            {
                            inView ? 
                                <CountUp start={0} end={19} duration={5} /> :
                                null}%
                        </div>
                        <h3 className='text-[50px] font-secondary'> coder </h3>
                    </div>

                    <div className='grid grid-cols-2 gap-y-12 gap-x-5 '>
                        <div className='text-[65px] font-bold text-red font-primary flex justify-end '>
                            {
                            inView ? 
                                <CountUp start={0} end={8} duration={5} /> :
                            null}%
                        </div>
                        <h3 className='text-[50px] font-secondary'> junkfood </h3>
                        <div className='text-[65px] font-bold text-red font-primary flex justify-end'>
                            {
                            inView ? 
                                <CountUp start={0} end={15} duration={5} /> :
                            null}%
                        </div>
                        <h3 className='text-[50px] font-secondary'> babyfoot </h3>
                        <div className='text-[65px] font-bold text-red font-primary flex justify-end'>
                            {
                            inView ? 
                                <CountUp start={0} end={15} duration={5} /> :
                                null}%
                        </div>
                        <h3 className='text-[50px] font-secondary'> babyfoot </h3>
                    </div>  
                </div>   
            </div>
        </div>

)
        
        
}

export default Insights;