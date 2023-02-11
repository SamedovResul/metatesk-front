import React,{useState,useRef} from 'react'
import Slider from "react-slick";
import img1 from './metaImg/banner.png';
import img2 from './metaImg/banner2.png';
import img3 from './metaImg/banner3.png';
import {Element} from 'react-scroll';
import ScrollTriger from 'react-scroll-trigger';

const SectionOne = ({setboolean}) => {
  
const imgs = [
  {
    img:'https://res.cloudinary.com/dbgyytugh/image/upload/v1666609831/banner_jwv0es.png'
  },
  {
    img:'https://res.cloudinary.com/dbgyytugh/image/upload/v1666609837/banner2_nvnsnl.png'
  },
  {
    img:'https://res.cloudinary.com/dbgyytugh/image/upload/v1666609834/banner3_wg1k1o.png'
  },
]
// use spring 
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 4000,
  cssEase: "linear",
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

  return (
    <Element name="home" >
      <ScrollTriger onEnter={()=>  setboolean(false)}>
      <article className='metatesk-info section-one'>
        <div className="text-container">
          <div>
            <p> education in  metaverse </p>
            <p>
            Take learning to the next level with exciting, entertaining and engaging classes
            </p>
            <button> 
              Browse Classes
            </button>
          </div>
        </div>
        <div className="img-container">
          <img src="https://res.cloudinary.com/djzudd6ub/image/upload/v1676110247/metatesk%20web/idris_for_metatesk_khsdkn.png" alt="" />
        </div>
      </article>
      </ScrollTriger>
    </Element>
  )
}

export default SectionOne
