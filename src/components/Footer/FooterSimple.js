import React from 'react';

import Logo from '../../assets/logo.png';

const FooterSimple = () => {
    return <footer className='bg-primary py-4'>
        <div className='container mx-auto text-white flex justify-between'>
            <a href='/'><img src={Logo} className='w-[90px]'alt='' /> </a>
            Copyright  &copy; 2022. All rights reserved.
        </div>
    </footer>
};

export default FooterSimple;