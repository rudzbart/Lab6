import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import Login from "./Login";
import "./Home.css";
import {Slide} from 'react-slideshow-image';



const slideImages = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}


export default function Home() {
  const [isAuthenticated, userHasAuthenticated] = useState(true);
  return (
    <div class="navbar-wrapper">
    <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Uszanowanko</a>
    </div>
    <div class="button-wrapper">
    <Link to="/"><Button id="logout_button">Logout</Button></Link>
    </div>
    <div class="ul-wrapper">
    <ul class="nav navbar-nav">
      <li class="active"><Link to="/home">Home</Link></li>
      <li><a href="#"><Link to="/aboutme">About me</Link></a></li>
      <li><a href="#"><Link to="/contact">Contact</Link></a></li>
    </ul>
    </div>
    </div>
    </nav>
    <div className="Home">
      <div className="lander">
        <header>
        </header>
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>Slide 3</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                <span>Slide 4</span>
              </div>
            </div>
          </Slide>
        </div>
        <div>
          <img src="images/moj4.png" alt="moj4"/>
          <img src="images/moj2.png" alt="moj2"/>
          <img src="images/moj1.png" alt="moj1"/>
          <img src="images/moj3.png" alt="moj3"/>
        </div>
        <div class="footer-wrapper">
        <div class="footer">
        <a href="https://www.instagram.com/pink_kiddo_/" class="fa fa-instagram"></a>
        <a href="https://www.facebook.com/bartosz.rudz.1" class="fa fa-facebook"></a>
        <a href="https://github.com/rudzbart" class="fa fa-github"></a>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
