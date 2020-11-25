import React from 'react';
import {Link} from 'react-router-dom';

//Stateless Components can be written as Functional Components
function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '120px' }} />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                    GitHub Profile
                </Link>
            </div>
        </div>
    )
}


export default UserItem;