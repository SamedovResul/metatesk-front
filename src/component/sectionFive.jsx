import React from 'react'
import img1 from './metaImg/Img1.png';
import img2 from './metaImg/Img2.png';
import img3 from './metaImg/Img3.png';
const SectionFive = () => {



  const imgs = [
    {
      img:img1,
      text:'PC'
    },
    {
      img:img2,
      text:'VR'
    },
    {
      img:img3,
      text:'MOBILE'
    },
  ]
  return (
    <article className='section-five'>
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
               <h3> accessible by any device </h3>
               <h3> for your convenience </h3>
              </div>
            </div>
            {
                  imgs.map((data, i) =>{
                    const {img,text} = data
                    return(
                      <div key={i} className="col-md-4">
                        <div className="img-box">
                          <img src={img} alt="metatesk" />
                          <p>{text}</p>
                        </div>
                      </div>
                    )
                  })
                }
          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionFive