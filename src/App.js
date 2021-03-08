import { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Translator from './components/Translator';
import Profile from './components/Profile';
import {storage} from './utils/storage';
import PrivateRoute from './components/hoc/PrivateRoute';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [userName, setUserName] = useState("");
  const [shownUserName, setShownUserName] = useState(storage.getItem("userName"));

  const onChangeUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleSubmit = () => {
    storage.setItem("userName", userName); //Adds username in local storage
    updateUserName();
  }

  const logOut = () => {
    storage.clear(); //Removes all data from local storage
    updateUserName();
  }

  //Updates username so it's shown/hidden in header without updating page
  const updateUserName = () => {
    setShownUserName(storage.getItem("userName"))
  }

  return (
    <div className="App">
      <Router>
        <Header userName={shownUserName}/>
        <Switch>
          <PrivateRoute exact path="/">
            <Translator />
          </PrivateRoute>
          <Route path="/Login">
            <Login userName={userName} onChangeUserName={onChangeUserName} submit={handleSubmit}/>
          </Route>
          <PrivateRoute path="/profile">
            <Profile logOut={logOut}/>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
