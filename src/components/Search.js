import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ""
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }
    onChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            text: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert("Enter GitHub User Name", "danger");
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({
                text: ''
            })
        }
    }
    render() {
        const { showClear, clearUsers } = this.props;

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
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear Users</button>}

            </div>
        )
    }
}

export default Search;
