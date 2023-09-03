import React from 'react'
import before from './metaImg/beforeRaul.png'
import girl from './metaImg/chinaGirl.png'

const sectionFour = () => {
  return (
    <article className='section-four'>
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <h3> <span> metatesk </span> <br />
                    <span> is making the learning process </span> <br />
                    <span> engaging, entertaining, exciting </span> </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <p> before </p>
                <img src={before} alt="metatesk" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
              <p> now </p>
                <img src={girl} alt="metatesk" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionFour