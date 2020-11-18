import React, { Component } from 'react';

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: 'id',
            login: 'ip11',
            avatar_url: 'https://avatars0.githubusercontent.com/u/39377668?v=4',
            html_url: 'https://github.com/ip11'
        }
    }
    render() {
        const {id,login,avatar_url,html_url} = this.state;
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
}

export default UserItem;