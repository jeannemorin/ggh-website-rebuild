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
        header ? 'bg-white py-3 shadow-lg' : 'bg-transparent py-4'} fixed z-50 w-full transition-all duration-300`}>
            
            <div className='container mx-auto flex  flex-col items-center gap-y-0
            lg:flex-row lg:justify-between'> 
                <a href='#'>
                    <img className='w-[90px]' src={Logo} alt='' />
                </a>

                <nav className={`${header ? 'text-primary' : 'text-primary'} flex gap-x-4 lg:gap-x-8
                tracking-[1px] items-center` }>
                        <a href='/' className='hover:text-accent transition cursor-pointer'> Home</a>
                        <a href='/about' className='hover:text-accent transition cursor-pointer'>Asso</a>
                        <a href='/blog' className='hover:text-accent transition'> Actualités'</a>
                        <a href='/archives' className='hover:text-accent transition'> Les Editions</a>
                        <a href='/sponsor' className='hover:text-accent transition'> Sponsor</a>

                        <button className='btn btn-sm'>Contact</button>
                </nav>
            </div>
        </header>
    )
};

export default Header;