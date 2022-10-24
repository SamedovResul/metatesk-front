import React, { useState, useRef, useEffect } from "react";
import img1 from "./metaImg/image1.png";
import img2 from "./metaImg/image2.png";
import img3 from "./metaImg/image3.png";
import { useSpring, animated } from "react-spring";

const SectionTwo = () => {
  const [Scroll, getScroll] = useState("");

  const imgs = [
    {
      img: "https://res.cloudinary.com/dbgyytugh/image/upload/v1666609838/image2_yubhzi.png",
    },
    {
      img: "https://res.cloudinary.com/dbgyytugh/image/upload/v1666609837/image1_fg49bt.png",
    },
    {
      img: "https://res.cloudinary.com/dbgyytugh/image/upload/v1666609838/image3_eutmiq.png",
    },
  ];

  return (
    <article className="section-three">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            {imgs.map((data, i) => {
              const { img } = data;
              return (
                <div key={i} className="col-md-4 ">
                  <div className="metatesk-box ">
                    <div className="img-div">
                      <img src={img} alt="" />
                    </div>
                    <p>Anytime, Anywhere</p>
                    <p>join the classes</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SectionTwo;
