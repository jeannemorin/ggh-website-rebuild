import React from "react";
import Marquee from "react-fast-marquee";

import { Link } from "react-scroll";

const link = 'https://www.flickr.com/photos/club-ephemere/albums/72177720295591573'
const photos = [
    {
        url:"https://www.flickr.com/photos/club-ephemere/51786717145/in/album-72177720295591573/"
    }
]

const Gallery = () => (
  <Marquee>
    {photos.map(photo => <img src={photo.url} alt=""/>)}
    <Link to={link} activeClass='active' 
              smooth={true} 
              spy={true} ><button className='btn btn-lg'>Voir toutes les photos</button></Link>
  </Marquee>
)

export default Gallery;