import React, { Fragment } from 'react';
import axios from 'axios';
//React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
import Dummy from './components/Dummy';
import User from './components/User';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            user: {},
            loading: false,
            alert: null,
            repos: []
        }
        this.searchUsers = this.searchUsers.bind(this);
    }
    async componentDidMount() {
        this.setState({
            loading: true
        });
        const res = await axios.get("https://api.github.com/users");
        this.setState({
            users: res.data,
            loading: false
        });
    }
    async searchUsers(text) {
        this.setState({
            loading: true
        });
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        this.setState({
            users: res.data.items,
            loading: false
        });
    }
    clearUsers = () => {
        this.setState({
            users: []
        })
    }
    setAlert = (msg, type) => {
        this.setState({
            alert: {
                msg: msg,
                type: type
            }
        });
        setTimeout(() => {
            this.setState({
                alert: null
            });
        }, 5000);
    }
    //Get Single User Data
    getUser = async (username) => {
        this.setState({
            loading: true
        });
        const res = await axios.get(`https://api.github.com/users/${username}`);
        this.setState({
            user: res.data,
            loading: false
        })

    }
    //Get User Repos
    getUserRepos = async (username) => {
        this.setState({
            loading: true
        });
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
        this.setState({
            repos: res.data,
            loading: false
        })
    }
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <div className="container">
                        <Alert alert={this.state.alert} />
                        <Switch>
                            <Route
                                exact path="/"
                                render={() => (
                                    <Fragment>
                                        <Search searchUsers={this.searchUsers}
                                            clearUsers={this.clearUsers}
                                            showClear={this.state.users.length > 0 ? true : false}
                                            setAlert={this.setAlert}
                                        />
                                        <Users users={this.state.users}
                                            loading={this.state.loading}
                                        />
                                    </Fragment>
                                )}
                            />
                            <Route
                                exact path="/about"
                                render={() => (
                                    <Dummy />
                                )}
                            />
                            <Route
                                exact
                                path="/user/:login"
                                render={(props) => (
                                    <User
                                        {...props}
                                        getUser={this.getUser}
                                        user={this.state.user}
                                        loading={this.state.loading}
                                        repos={this.state.repos}
                                        getUserRepos={this.getUserRepos}
                                    />
                                )}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }

}



export default App;
