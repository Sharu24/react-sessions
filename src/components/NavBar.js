import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ title, icon }) {
    return (
        <nav className="navbar bg-primary">
            <a href="/">
                <h1>
                    <i className={icon}></i> {title}
                </h1>
            </a>
        </nav>
    )
}
NavBar.defaultProps = {
    icon: "fab fa-github",
    title: "GitHub Search Engine"
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default NavBar;