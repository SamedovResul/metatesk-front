import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section">
    <div className="container">
      <div className="container-fluid" >
        <div className="row">
          <div className="col-md-4 col-sm-6 col-6">
            <div className="ul-box">
              <p>Pages</p>
              <ul>
                <li> <a href="">Home</a> </li>
                <li> <a href="">Education</a> </li>
                <li> <a href="">About</a></li>
                <li> <a href="">Contact</a> </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-6">
            <div className="ul-box">
              <p>Education</p>
              <ul>
                <li> <a href="">Science</a> </li>
                <li> <a href="">Programming</a> </li>
                <li> <a href="">Digital Art</a> </li>
                <li> <a href="">Robotics</a> </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ul-box">
              <p>address</p>
              <ul>
                <li>Baku Yasamal r.</li>
                <li>A. M. Sharifzade str. 237 A</li>
                <li>contact@enteskedu.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer