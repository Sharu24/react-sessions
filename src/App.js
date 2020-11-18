import React from 'react';

import './App.css';

import NavBar from './components/NavBar';
import UserItem from './components/UserItem';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <UserItem />
            </div>
        )
    }
}



export default App;
