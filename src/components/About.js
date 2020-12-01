//Whats the difference between RFC,RCC and React Hooks

import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            password: "",
            gender: "",
            dob: "",
            location: "",
            tos: false
        };
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("https://react-backend-api.herokuapp.com/api/user/register", this.state);
        console.log(res.data);
    }
    onChange = (e) => {
        // set tos state
        if (e.target.name === "tos") {
            this.setState({
                [e.target.name]: e.target.checked,
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    };
    render() {
        return (
            <>
                <h1>React Forms</h1>
                <p>This is a form submission in React and Express</p>
                <div className="card">
                    <form action="/" onSubmit={this.onSubmit}>
                        <label htmlFor="fname">First name</label>
                        <input
                            type="text"
                            name="fname"
                            onChange={this.onChange}
                            value={this.state.fname}
                        />
                        <label htmlFor="lname">Last name</label>
                        <input
                            type="text"
                            name="lname"
                            onChange={this.onChange}
                            value={this.state.lname}
                        />
                        <label>Gender</label>
                        <br />
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            onChange={this.onChange}
                        />
                        <label htmlFor="male"> Male </label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            onChange={this.onChange}
                        />
                        <label htmlFor="female"> Female </label>
                        <br />
                        <br />
                        <label htmlFor="dob">Date of birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={this.state.dob}
                            onChange={this.onChange}
                        ></input>
                        <label htmlFor="location">Location</label>
                        <select
                            name="location"
                            style={{ marginTop: 20 }}
                            value={this.state.location}
                            onChange={this.onChange}
                        >
                            <option value="">- Select City -</option>
                            <option value="Banglore">Bangalore</option>
                            <option value="Kochi">Kochi</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                        <br />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                        <input
                            type="checkbox"
                            name="tos"
                            value={this.state.tos}
                            onChange={this.onChange}
                        />
                        <label htmlFor="tos"> I agree with terms and conditions</label>
                        <br />
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
                </div>
            </>
        )
    }
}

export default About;