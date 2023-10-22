import React, {useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';

import { Link } from 'react-scroll';

const Header = () => {

    const [header, setHeader] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });
    });

    return (
    <header className={`${
        header ? 'bg-white py-3 shadow-lg' : 'bg-transparent py-4'} lg:fixed z-50 w-full transition-all duration-300`}>
            
            <div className='container mx-auto flex items-center gap-y-0
            flex-row justify-between'> 
                <a href='/'>
                    <img className='w-[80px] shakingImg' src={Logo} alt='' />
                </a>

                <nav className={`${header ? 'text-primary' : 'text-primary'} flex gap-x-4 lg:gap-x-8
                tracking-[1px] items-center text-[20px] ` }>

                    <div className='invisible md:visible flex gap-x-4 lg:gap-x-8'>
                            <a href='/' className=' transition '> Home</a>
                            <a href='/about' className=' transition '>Asso</a>
                            <a href='/' className=' transition'> Actualités'</a>
                            <a href='/archives' className=' transition'> Les Editions</a>
                            <a href='/' className=' transition'> Sponsor</a>
                    </div>
                        <Link to='contact' activeClass='active' 
                        smooth={true} ><button className='btn btn-sm lg:btn-lg'>Contact</button></Link>
                </nav>
            </div>
        </header>
    )
};

export default Header;