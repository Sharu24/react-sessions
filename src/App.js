import React, { Fragment } from "react";

//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./components/About";
import User from "./components/User";

//Import GitHub Context into App.js
import GitHubState from "./context/GitHub/GitHubState";
import AlertState from "./context/Alert/AlertState";

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
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GitHubState>    
  );
}

export default App;
