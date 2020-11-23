import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ""
    }
    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }
    onChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            text: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        placeholder="Search GitHub User ..." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear Users</button>
            </div>
        )
    }
}

export default Search;