import React from "react";
import img1 from './metaImg/core.png'
import img2 from './metaImg/MetaQuest.png'
import img3 from './metaImg/Roblox.png'

const SectionFour = () => {
  return (
    <section className="section-seven">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <h3>avaliable on</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <img src={img2} alt="metatesk" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <img src={img1} alt="metatesk" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <img src={img3} alt="metatesk" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
