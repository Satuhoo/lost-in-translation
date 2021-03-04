import { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Translator from './components/Translator';
import Profile from './components/Profile';
import {storage} from './utils/LocalStorage';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  const [userName, setUserName] = useState("");
  const [shownUserName, setShownUserName] = useState(storage.getItem("userName"));

  const onChangeUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleSubmit = () => {
    storage.setItem("userName", userName);
    updateUserName();
  }

  const logOut = () => {
    storage.clear();
    updateUserName();
  }

  const updateUserName = () => {
    setShownUserName(storage.getItem("userName"))
  }

  return (
    <div className="App">
      <Router>
        <Header userName={shownUserName}/>
        <Switch>
          <Route exact path="/">
            <Login userName={userName} onChangeUserName={onChangeUserName} submit={handleSubmit}/>
          </Route>
          <Route path="/translator">
            <Translator />
          </Route>
          <Route path="/profile">
            <Profile logOut={logOut}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
