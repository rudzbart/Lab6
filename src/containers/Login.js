import React, {useState} from "react";
import {Button, FormGroup, FormControl} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    try{
      alert("Logged in");
      props.userHasAuthenticated(true);
    }
    catch(e){
      alert(e.message);

    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <h1>Witaj!</h1>
          <FormControl
            autoFocus
            type="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormControl
          placeholder ="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Link to="/home">
        <Button block disabled={!validateForm()} type="submit">
          Login
        </Button>
        </Link>
      </form>
      <div><p className="incorrectpass">podano błędne hasło</p></div>
    </div>
  );



}
