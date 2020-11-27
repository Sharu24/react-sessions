import React, { Component } from 'react'

class About extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            password: '',
            gender: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        //Computed Property Names in Objects
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
        // console.log(e.target.name, e.target.value);
    }
    render() {
        return (
            <>
                <h1>React Forms</h1>
                <p>This is just some form submission in React and Express</p>
                <div className="container" style={{ margin: '10px 10px' }}>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="fname">First name:</label>
                        <input type="text" name="fname" value={this.state.fname} onChange={this.onChange} />
                        <label htmlFor="lname">Last name:</label>
                        <input type="text" name="lname" value={this.state.lname} onChange={this.onChange} />
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.onChange} />

                        <input type="radio" id="male" name="gender" value="male" onChange={this.onChange}/>
                        <label htmlFor="male"> Male </label><br />
                        <input type="radio" id="female" name="gender" value="female" onChange={this.onChange}/>
                        <label htmlFor="female"> Female </label><br />


                        <input type="submit" value="Submit"></input>
                    </form>
                </div>

            </>
        )
    }
}

export default About;