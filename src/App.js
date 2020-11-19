import React from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Users from './components/Users';

class App extends React.Component {
    state = {
        users: []
    }
    async componentDidMount() {
        const res = await axios.get("https://api.github.com/users");
        this.setState({
            users: res.data
        })
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <Users users={this.state.users} />

                </div>
            </div>
        )
    }

}



export default App;
