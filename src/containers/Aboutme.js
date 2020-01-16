import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import Login from "./Login";
import "./Aboutme.css";
import ReactPlayer from 'react-player'


export default function Aboutme() {
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
      <li ><Link to="/home">Home</Link></li>
      <li class="active"><Link to="/aboutme">About me</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    </div>
    </div>
    </nav>
    <div className="Home">
      <div className="lander">
        <div class="player">
        <ReactPlayer url='https://www.youtube.com/watch?v=zuwjENIHSks' playing />
        <h2>No o mnie to generalnie tyle, że lubię techno</h2>
        <h3>I bawić się frontem</h3>
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
