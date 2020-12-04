import React from 'react';

import UserItem from './UserItem';
import Loading from './Loading';
import PropTypes from 'prop-types';


function Users({ users, loading }) {
    if (loading) {
        return <Loading />;
    } else {
        return <div style={userStyle}>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

Users.propTypes = {
    users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
}


export default Users;