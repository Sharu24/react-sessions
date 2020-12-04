import React, { Fragment } from "react";

//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Alert from "./components/Alert";
import About from "./components/About";
import User from "./components/User";

//Import GitHub Context into App.js
import GitHubState from "./context/GitHub/GitHubState";
import AlertState from "./context/Alert/AlertState";
import NotFound404 from "./components/404";

function App() {

  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div>
            <NavBar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound404} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
}

export default App;
