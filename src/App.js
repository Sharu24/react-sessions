import React from 'react';

import './App.css';

import NavBar from './components/NavBar';
import Users from './components/Users';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Users />
            </div>
        )
    }
}



export default App;
