import React, {useState, useEffect} from 'react';
import { Navbar } from "react-bootstrap";
import './App.css';
import Routes from "./Routes";


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
  onLoad();
}, []);

async function onLoad() {
  try {
    userHasAuthenticated(true);
  }
  catch(e) {
    if (e !== 'No current user') {
      alert(e);
    }
  }

  setIsAuthenticating(false);
}

  return (
    <div className="App">

      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />

    </div>
  );
}

export default App;
