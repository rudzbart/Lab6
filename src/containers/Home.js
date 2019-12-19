import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import Login from "./Login";
import "./Home.css";





export default function Home() {
  const [isAuthenticated, userHasAuthenticated] = useState(true);
  return (
    <div className="Home">
      <div className="lander">
        <header>
        <Link to="/">
        <Button>
        Logout
        </Button>
        </Link>
        </header>
        <h1>Zalogowano</h1>
        <p>witaj na stronie.</p>

      </div>
    </div>
  );
}
