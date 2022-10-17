import React,{useState} from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Metatesk from './metatesk/Metatesk'
import Navbar from "./metatesk/navbar";
import Footer from "./metatesk/footer";

function App() {
  const [boolean, setboolean] = useState(false)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    
      <Router>
        <div className="App" onClick={() => boolean? setboolean(false) : null } >
        <Route path="/"  >
          <Navbar Boolean={{boolean, setboolean}} />
        </Route >
        <Switch>
          <Route path="/"  >
            <Metatesk Boolean={{boolean, setboolean}} />
          </Route >
        </Switch>
        <Route path="/"  >
          <Footer  />
        </Route >
      </div>
      </Router>
    
  );
}

export default App;
