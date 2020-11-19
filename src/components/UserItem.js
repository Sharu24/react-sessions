import React from 'react';

//Stateless Components can be written as Functional Components
function UserItem({ user: { login, avatar_url, html_url } }) {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '120px' }} />
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">
                    GitHub Profile
                </a>
            </div>
        </div>
    )
}


export default UserItem;