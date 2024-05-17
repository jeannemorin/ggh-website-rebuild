import React from 'react';

import Balln from "../../assets/night4inno/balln.png";
import Carshare from "../../assets/night4inno/carshare.webp";
import Cooknway from "../../assets/night4inno/cooknway.jpg"
import Manah from "../../assets/night4inno/manah.jpg";
import Rockoffice from "../../assets/night4inno/rockoffice.png";
import Sonar from "../../assets/night4inno/sonar.png";
import Wokies from "../../assets/night4inno/thewokies.png";
import Ymove from "../../assets/night4inno/ymove.jpg"
import { BsBalloon } from 'react-icons/bs';

const startups = [
    {
        title:"Ball'n",
        subtitle:"Aurélien Gabdou Baroa",
        photo:Balln
    },
    {
        title:"CarShare",
        subtitle:"Mehdi El Ouni",
        photo:Carshare
    },
    {
        title:"Cook'n'way",
        subtitle:"Luc Vianney Dibai & Tania Somedo Rodrigues",
        photo:Cooknway
    },
    {
        title:"Manah",
        subtitle:"Cindy Pichegrain",
        photo:Manah
    },
    {
        title:"Rock Office",
        subtitle:"Zora Younsi",
        photo:Rockoffice
    },
    {
        title:"Sonar",
        subtitle:"Benjamin Mercadier",
        photo:Sonar
    },
    {
        title:"Ymove",
        subtitle:"Fathi Hadj",
        photo:Ymove
    },
]

const Startups = () => {

    return (
        <section id="startups" className='section'>
            <div className='mx-auto container'>
                <Display_Round items={startups}/>

            </div>

        </section>
    )
}

const Display_Round = ({items}) => {

    return (
        <div className='py-12'>
            <div className="container mx-auto">
                <div className='grid grid-cols-2 gap-y-10 lg:grid-cols-4'>

                    {items.map((item, index) => {  
                        return (<div className='flex flex-col items-center justify-center' key={index}>
                            <img src={item.photo} alt='' className='w-[160px]'/>
                            <h3 className='text-blue font-bold font-special h2 py-2'>{item.title}</h3>
                            <h3 className='text-center text-[25px]'>{item.subtitle}</h3>
                        </div>)
                        })}
                </div>

            </div>
        </div>
    )
};


export default Startups;