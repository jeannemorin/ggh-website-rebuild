import React from "react";

import img1 from '../../assets/editions/1.png';

const Card = ({image, title, description}) => {
    return (
        <div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'/>      

                <img className='group-hover:scale-125 transition-all duration-500' src={require(`${image}`)} alt='' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='h1 text-red'>{title}</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                    <span className='text-4x1 text-white'>{description}</span>
                </div>
            </div>
        </div>)
}

export default Card;