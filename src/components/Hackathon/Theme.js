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
l
                {/*images*/}
                <div className="flex lg:flex-row flex-col max-w-[600px] gap-x-8">
                    
                    <img src={Img} alt="" className=" rounded-3x"/>

                    <img src={Img} alt="" className="rounded-3xl" />
                    
                </div>
            </div>
        </section>
    )
}

export default Theme;