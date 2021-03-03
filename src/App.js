import { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Translator from './components/Translator';
import Profile from './components/Profile';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [userName, setUserName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const onChangeUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleSubmit = () => {
    setLoggedIn(true);
  }

  const logOut = () => {
    setLoggedIn(false);
    setUserName("");
  }

  return (
    <div className="App">
      <Router>
        <Header userName={userName} loggedIn={loggedIn} logOut={logOut}/>
        <Switch>
          <Route exact path="/">
            <Login userName={userName} onChangeUserName={onChangeUserName} submit={handleSubmit}/>
          </Route>
          <Route path="/translator">
            <Translator />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
