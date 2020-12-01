import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
//React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
import User from './components/User';


function App() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await axios.get("https://api.github.com/users");
            setUsers(res.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    //Search User Function which is going as props to Search Component
    const searchUsers = async (text) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        setUsers(res.data.items);
        setLoading(false);
    }

    //Get Single User Data
    const getUser = async (username) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${username}`);
        setUser(res.data);
        setLoading(false);
    }

    //Get User Repos
    const getUserRepos = async (username) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
        setRepos(res.data);
        setLoading(false);
    }

    const clearUsers = () => {
        setUsers([]);
    }
    const showAlert = (msg, type) => {
        setAlert({ msg: msg, type: type });
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Alert alert={alert} />
                    <Switch>
                        <Route
                            exact path="/"
                            render={() => (
                                <Fragment>
                                    <Search searchUsers={searchUsers}
                                        clearUsers={clearUsers}
                                        showClear={users.length > 0 ? true : false}
                                        setAlert={showAlert}
                                    />
                                    <Users users={users}
                                        loading={loading}
                                    />
                                </Fragment>
                            )}
                        />
                        <Route
                            exact path="/about"
                            render={() => (
                                <About />
                            )}
                        />
                        <Route
                            exact
                            path="/user/:login"
                            render={(props) => (
                                <User
                                    {...props}
                                    getUser={getUser}
                                    user={user}
                                    loading={loading}
                                    repos={repos}
                                    getUserRepos={getUserRepos}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}




export default App;
