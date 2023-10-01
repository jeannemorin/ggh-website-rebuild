import React from 'react'

import Marquee from "react-fast-marquee";

import socgen from '../../assets/partner/socgen.png'
import massa from "../../assets/partner/massa.png"
import qonto from "../../assets/partner/qonto.png"
import slb from "../../assets/partner/slb.png"
import datadog from "../../assets/partner/datadog.png"

import { Link } from 'react-scroll';

const Partners = () => {
    return (
        <div className=''>
            <h1 className='flex h1 items-center justify-center mb-10'>ILS NOUS FONT CONFIANCE</h1>
        
            <Marquee className='hidden lg:flex lg:py-8 lg:align-middle' pauseOnHover='true' speed='150' autoFill='true'>
                <img src={socgen} alt='' className='w-80 mr-20 align-middle'/>
                <img src={massa} alt='' className='w-60 mr-20 align-middle'/>
                <img src={qonto} alt='' className='w-80 mr-20 align-middle'/>
                <img src={slb} alt='' className=' mr-20 align-middle'/>
                <img src={datadog} alt='' className='w-80 mr-20 align-middle'/>
            </Marquee>
            <div className='flex flex-1 items-center justify-center mt-10'> 
                <Link to='contact' smooth={true}><button className='btn btn-lg'>Devenir partenaire</button></Link>
            </div>
        </div>
    )
}

export default Partners;