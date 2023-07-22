import React from 'react';

import Marquee from "react-fast-marquee";


const TextSlider = () => {
  return (
    <Marquee className='py-8' pauseOnHover='true' speed='150' autoFill='true'>
        <h1 className='h1'>- Gotta go hack -</h1>
    </Marquee>
  );
}

export default TextSlider;
