import React, { Fragment } from 'react';

import './App.css';

import NavBar from './components/NavBar';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar title="GitHUb App" icon="github icon"/>
            </div>
        )
    }
}



export default App;
