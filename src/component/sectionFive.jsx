import React from 'react'
const SectionFive = () => {



  const imgs = [
    {
      img:'https://res.cloudinary.com/dbgyytugh/image/upload/v1666609842/Img3_gs0vzw.png',
      text:'PC'
    },
    {
      img:'https://res.cloudinary.com/dbgyytugh/image/upload/v1666614856/Img2_gete2g.png',
      text:'VR'
    },
    {
      img:'https://res.cloudinary.com/dbgyytugh/image/upload/v1666609852/Img1_yuxlde.png',
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
                      <div className="col-md-4">
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