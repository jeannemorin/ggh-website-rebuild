import React from "react";

import Img from "../../assets/portfolio-img1.png";

import {motion } from 'framer-motion'

import { fadeIn } from '../../variants';

import img1 from '../../assets/editions/1.png';
import img2 from '../../assets/editions/2.png';
import img3 from '../../assets/editions/3.png';


const Theme = () => {

    return (
        <section id="theme" className="section bg-black">
            <div className="container mx-auto">
                <h1 className="h1 text-white">THEMES</h1>
                <h3 className="h3 text-white">Des trucs à dire sur le fait que les thèmes sont pas reveal</h3>
                
                {/*images*/}
                <div className="flex lg:flex-row flex-col w-full gap-x-8">

                    {/*first theme*/}
                    <div>
                        <div className='group relative overflow-hidden rounded-xl '>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'/>      

                            <img className='group-hover:scale-125 transition-all duration-500' src={Img} alt='' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='h1 text-red'>Thème 1</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                                <span className='text-4x1 text-white'>A découvrir le 13 juin.</span>
                            </div>
                        </div>
                    </div>

                    {/*second theme*/}
                    <div>
                        <div className='group relative overflow-hidden rounded-xl '>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'/>      

                            <img className='group-hover:scale-125 transition-all duration-500' src={Img} alt='' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='h1 text-red'>Thème 2</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                                <span className='text-4x1 text-white'>A découvrir le 13 juin</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Theme;