import React, { Fragment } from 'react';


class App extends React.Component {
    render() {
        return (
            <Fragment>
                <div id="sample1" style={style1}>
                </div>
                <br />
                <div id="sample2" style={style2}>
                </div>
                <h1>Hello {Math.sqrt(625)} </h1>
                <h2>There</h2>
            </Fragment>
        )
    }
}

const style1 = {
    backgroundColor: 'red',
    height: '100px',
    width: '100px'
}

const style2 = {
    backgroundColor: 'blue',
    height: '100px',
    width: '100px'
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