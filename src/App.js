import React from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Users from './components/Users';
import Search from './components/Search';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: false
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
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
                    <Users users={this.state.users} loading={this.state.loading} />
                </div>
            </div>
        )
    }

}



export default App;
