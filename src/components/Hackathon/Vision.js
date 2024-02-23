import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

import { IoIosTimer } from "react-icons/io";
import { PiTarget } from "react-icons/pi";
import { AiOutlineLaptop } from "react-icons/ai";

const Vision = () => {

    return <section id="hackathon" className="section">
        <div className="container mx-auto">
            <div className="w-full flex flex-col lg:flex-row gap-x-20 py-8">
                <motion.div 
                 variants={fadeIn('right',0.3)} 
                 initial="hidden" 
                 whileInView={'show'} 
                 viewport={{once: false, amount: 0.7}} 
                 className="basis-1/3 flex flex-col">
                    <IoIosTimer className="text-[70px]"/>
                    <h2 className="h2 text-accent">FORMAT</h2>
                    <p className="body">Un week-end où les participants vont développer 
                    un projet innovant autour d’un thème donné en 48h chrono.</p>
                </motion.div>
                <motion.div 
                 variants={fadeIn('down',0.3)} 
                 initial="hidden" 
                 whileInView={'show'} 
                 viewport={{once: false, amount: 0.7}} 
                 className="basis-1/3 flex flex-col">
                     <PiTarget  className="text-[70px]"/>
                    <h2 className="h2 text-accent">OBJECTIF</h2>
                    <p className="body">Relever le défi de développer un projet en 48h et découvrir une première expérience entrepreneurial.</p>
                </motion.div>
                <motion.div 
                 variants={fadeIn('left',0.3)} 
                 initial="hidden" 
                 whileInView={'show'} 
                 viewport={{once: false, amount: 0.7}} 
                 className="flex basis-1/3 flex-col">
                     <AiOutlineLaptop  className="text-[70px]"/>
                    <h2 className="h2 text-accent">REALISATION</h2>
                    <p className="body">Les équipes réalisent un service, un software ou un objet connecté le plus fonctionnel possible ainsi qu’un Business Model.</p>
                </motion.div>

            </div>

        </div>
    </section>
}

export default Vision;