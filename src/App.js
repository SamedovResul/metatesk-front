import React from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Metatesk from './metatesk/Metatesk'
import Navbar from "./metatesk/navbar";
import Footer from "./metatesk/footer";

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    
      <Router>
        <div className="App">
        <Route path="/"  >
          <Navbar  />
        </Route >
        <Switch>
          <Route path="/"  >
            <Metatesk  />
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
