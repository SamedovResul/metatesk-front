import React, {useState,useEffect} from 'react'
import VideoPlayer from "react-video-js-player";
import ScrollTriger from 'react-scroll-trigger'
import img1 from './metaImg/book.png';
import poster from './metaImg/poster.png'
import Slider from "react-slick";




const SectionTwo = () => {
  const [number, setNumber] = useState(false)
  
  const Arrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-chevron-right outschool-0"><path fill="currentColor" d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>
    </div>  );

  const src = "https://res.cloudinary.com/dbgyytugh/video/upload/v1665658464/recipes/MetateskTrailer_14.49.50_hmrro3.mp4"


  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots:true,
    prevArrow: <Arrow className="" />,
    nextArrow: <Arrow className="" />
  };
  return (
    <ScrollTriger onEnter={()=>  setNumber(true)} onExit={() => setNumber(false)} >
      <article className='section-two'>
        <div  className="container">
          <div className="container-fluid">
            <div className="row">

              <div className="col-md-12">
                <div>
                  <p>Discover a world of endless learning possibilities</p>
                  <p>
                    We give kids 3–18 a place to build their own curriculum of interactive,
                    <br /> one-of-a-kind classes.
                  </p>
                </div>
              </div>
              <Slider {...settings}>
                <div className="col-md-3">
                  <div>
                    <div className="top-div">
                      <img src="https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:140,width:240/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/uxkppTQSTROb91QPTjRT" alt="" />
                    </div>
                    <div className="bottom-div">
                      <p> Lorem ipsum dolor sit. </p>
                      <button>
                        Davamı
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <div className="top-div">
                      <img src="https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:140,width:240/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/uxkppTQSTROb91QPTjRT" alt="" />
                    </div>
                    <div className="bottom-div">
                      <p> Lorem ipsum dolor sit. </p>
                      <button>
                        Davamı
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <div className="top-div">
                      <img src="https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:140,width:240/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/uxkppTQSTROb91QPTjRT" alt="" />
                    </div>
                    <div className="bottom-div">
                      <p> Lorem ipsum dolor sit. </p>
                      <button>
                        Davamı
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <div className="top-div">
                      <img src="https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:140,width:240/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/uxkppTQSTROb91QPTjRT" alt="" />
                    </div>
                    <div className="bottom-div">
                      <p> Lorem ipsum dolor sit. </p>
                      <button>
                        Davamı
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <div className="top-div">
                      <img src="https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:140,width:240/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/uxkppTQSTROb91QPTjRT" alt="" />
                    </div>
                    <div className="bottom-div">
                      <p> Lorem ipsum dolor sit. </p>
                      <button>
                        Davamı
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <div className="top-div">
                      <img src="https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:140,width:240/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/uxkppTQSTROb91QPTjRT" alt="" />
                    </div>
                    <div className="bottom-div">
                      <p> Lorem ipsum dolor sit. </p>
                      <button>
                        Davamı
                      </button>
                    </div>
                  </div>
                </div>
              </Slider>


              
            </div>

            {/* <div className="row">
              <div className="col-md-12">
                <h3> shifting <span> EDUCATION </span>  from  </h3>
                <div className="text-box text">
                  <p> boring </p> <p> to </p> <p> exciting </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="https://res.cloudinary.com/dbgyytugh/image/upload/v1666609835/book_jkiwjk.png" alt="metatesk" />
                  <p>traditional learning</p>
                </div>
              </div>
              <div className="text-box-responsive text">
                  <p> boring </p>
                  <p>traditional learning</p>
                  <p> to </p> 
                  <p> exciting </p>
              </div>
              <div className="col-md-6">
                <div className="video-box ">
                <VideoPlayer
                  src={src}
                  controls={true}
                  poster={poster}
                  className="video"   
                />
                <p>immersive learning</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </article>
    </ScrollTriger>

  )
}

export default SectionTwo

