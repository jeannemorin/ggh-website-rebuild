import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

import { HiOutlineTruck } from 'react-icons/hi';

const ThreeCol = () => {

    return <section id="hackathon" className="section">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-x-10 py-8">
                <motion.div 
                 variants={fadeIn('right',0.3)} 
                 initial="hidden" 
                 whileInView={'show'} 
                 viewport={{once: false, amount: 0.7}} 
                 className="flex flex-col py-6">
                    <HiOutlineTruck className="text-[100px]"/>
                    <h2 className="h2 text-accent">TITRE</h2>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Ut tellus elementum sagittis vitae et leo. Purus in mollis nunc sed. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Erat pellentesque adipiscing commodo elit at. Nunc non blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra nam libero justo. Ut enim blandit volutpat maecenas. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Habitasse platea dictumst quisque sagittis. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Mattis nunc sed blandit libero volutpat.</p>
                </motion.div>
                <motion.div 
                 variants={fadeIn('down',0.3)} 
                 initial="hidden" 
                 whileInView={'show'} 
                 viewport={{once: false, amount: 0.7}} 
                 className="flex flex-col py-6">
                     <HiOutlineTruck  className="text-[100px]"/>
                    <h2 className="h2 text-accent">TITRE</h2>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Ut tellus elementum sagittis vitae et leo. Purus in mollis nunc sed. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Erat pellentesque adipiscing commodo elit at. Nunc non blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra nam libero justo. Ut enim blandit volutpat maecenas. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Habitasse platea dictumst quisque sagittis. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Mattis nunc sed blandit libero volutpat.</p>
                </motion.div>
                <motion.div 
                 variants={fadeIn('left',0.3)} 
                 initial="hidden" 
                 whileInView={'show'} 
                 viewport={{once: false, amount: 0.7}} 
                 className="flex flex-col py-6">
                     <HiOutlineTruck  className="text-[100px]"/>
                    <h2 className="h2 text-accent">TITRE</h2>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Ut tellus elementum sagittis vitae et leo. Purus in mollis nunc sed. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Erat pellentesque adipiscing commodo elit at. Nunc non blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra nam libero justo. Ut enim blandit volutpat maecenas. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Habitasse platea dictumst quisque sagittis. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Mattis nunc sed blandit libero volutpat.</p>
                </motion.div>

            </div>

        </div>
    </section>
}

export default ThreeCol;