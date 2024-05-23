import React from 'react';

import Balln from "../../assets/night4inno/balln.png";
import Carshare from "../../assets/night4inno/carshare.png";
import Cooknway from "../../assets/night4inno/cooknway.png"
import Manah from "../../assets/night4inno/manah.png";
import Rockoffice from "../../assets/night4inno/rockoffice.png";
import Sonar from "../../assets/night4inno/sonar.png";
import Ymove from "../../assets/night4inno/ymove.png"

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

const DisplayRound = ({items}) => {

    return (
        <div className='py-12'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-4'>

                    {items.map((item, index) => {  
                        return (<div className='flex flex-col items-center' key={index}>
                            <img src={item.photo} alt='' className='w-[130px]'/>
                            <h3 className='text-blue font-bold font-special h2'>{item.title}</h3>
                            <h3 className='text-center text-[25px]'>{item.subtitle}</h3>
                        </div>)
                        })}
                </div>

            </div>
        </div>
    )
};

const Startups = () => {

    return (
        <section id="startups" className='section'>
            <div className='mx-auto container'>
                <h1 className='h1'>Les startups</h1>
                <DisplayRound items={startups}/>

            </div>

        </section>
    )
}




export default Startups;