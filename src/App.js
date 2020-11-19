import React from 'react';

import './App.css';

import NavBar from './components/NavBar';
import Users from './components/Users';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <Users />
                </div>
            </div>
        )
    }
}



export default App;
