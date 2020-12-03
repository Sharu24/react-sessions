import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ searchUsers, setAlert, showClear, clearUsers }) {
    const [text, setText] = useState("");
    const onChange = (event) => {
        // console.log(event.target.value);
        setText(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            setAlert("Enter GitHub User Name", "danger");
        } else {
            searchUsers(text);
            setText('');
        }
    }
    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="text"
                    value={text}
                    onChange={onChange}
                    placeholder="Search GitHub User ..." />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear Users</button>}

        </div>
    )
}


Search.propTypes = {
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search;
