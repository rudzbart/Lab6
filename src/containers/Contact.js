import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import Login from "./Login";
import "./Contact.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
      <li><Link to="/aboutme">About me</Link></li>
      <li class="active"><Link to="/contact">Contact</Link></li>
    </ul>
    </div>
    </div>
    </nav>
    <div className="Home">
      <div className="lander">
        <header>
        </header>
        <div class="contact">
        <form>
          Email: <input id="mailInput"class="mail-input" type="text" name="country" value="rudzbartosz97@gmail.com" readonly/>
        </form>
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
