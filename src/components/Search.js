import React, { Component } from 'react';

class Search extends Component {
    state = {
        text: ""
    }
    onChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            text: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form className="form">
                    <input
                        type="text"
                        name="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        placeholder="Search GitHub User ..." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search;
