import React, {useState} from "react";
import {Button, FormGroup, FormControl} from "react-bootstrap";
import { Link, Redirect, withRouter } from "react-router-dom";
import Home from "./Home";
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var toHome = 0;

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event){
    if(email == "rudzbartosz97@gmail.com" && password == "bartek"){
    try{
      alert("Logged in");
      toHome = 1;
      }
    catch(e){
      alert(e.message);
      }
    }
    else {
      alert("Your email or password is incorrect!");
    }
  }

  if(toHome == 1)return(<Redirect to='/home'/>);

  return (
    <div className="Login">
      <form onSubmit={e => handleSubmit(e.target.value)}>
        <FormGroup controlId="email">
          <h1>Welcome!</h1>
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
        <Button id="login-button" block disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );



}
