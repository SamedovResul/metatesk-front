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
        <p> EDUCATION in METAVERSE </p>
        <div className="text-container">
          <p> classes for </p>
          <p> 6-14 years old </p>
          <p> for </p>
          <p> any point of the world </p>
        </div>
          <div className="container-fluid">
            <div className="row">
              
              <div className="col-md-12">
              <Slider {...settings}>
                {
                  imgs.map((data, i) =>{
                    const {img} = data
                    return(
                      <div key={i} className='slide' >
                        <img src={img} alt="metatesk" />
                      </div>
                    )
                  })
                }
              </Slider>
              </div>
            
            </div>
          </div>


      </article>
      </ScrollTriger>
    </Element>
  )
}

export default SectionOne