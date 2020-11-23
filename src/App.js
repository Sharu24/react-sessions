import React from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: false,
            alert: null
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
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <Alert alert={this.state.alert} />
                    <Search searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={this.state.users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                    />
                    <Users users={this.state.users}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        )
    }

}



export default App;
