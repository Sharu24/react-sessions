import React, { Fragment } from 'react';

import './style.css';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <div id="sample1" >
                </div>
                <br />
                <div id="sample2" >
                </div>
                <h1>Hello {Math.sqrt(625)} </h1>
                <h2>There</h2>
            </Fragment>
        )
    }
}



export default App;

/*
React Styling Components
1) InLine Styling
Follow camel case CSS Properties
background-color  : backgroundColor


2) Javascript Object Styles

3) External Style Sheets

*/