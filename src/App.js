import React from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Users from './components/Users';
 
class App extends React.Component {
    state = {
        users: [],
        loading: false
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
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <Users users={this.state.users} loading={this.state.loading} />

                </div>
            </div>
        )
    }

}



export default App;
