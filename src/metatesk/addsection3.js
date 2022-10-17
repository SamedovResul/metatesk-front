import React from 'react'
import sectionImg from './metaImg/sectionOnebg.jpeg'
import {Element} from 'react-scroll'
import ScrollTriger from 'react-scroll-trigger'

const Addsection3 = ({setboolean}) => {
  return (
    <Element name="join" >
      <ScrollTriger onEnter={()=>  setboolean(false)}  >
        <article className='metattesk-contact add-section-Three'>
        {/* <div className='png' ></div> */}
        <div  className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 ">
                <form action="">
                  <div>
                    <p> Get a FREE demo class for your child </p>
                  </div>
                    <input type="text" required placeholder='Name and Surname'  />
                    <input type="text" required placeholder='Country' />
                    <input type="email" required  placeholder='E-mail adress' />
                    <button>join</button>
                </form>
              </div>
              <div className="col-md-6 ">
                <div  className='metatesk-img' >
                  <img 
                  src={sectionImg} alt="metatesk"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </article>    
      </ScrollTriger>
    </Element>
  )
}

export default Addsection3