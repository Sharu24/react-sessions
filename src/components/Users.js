import React, { Component } from 'react';

import UserItem from './UserItem';


class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'ip11',
                avatar_url: 'https://avatars0.githubusercontent.com/u/39377668?v=4',
                html_url: 'https://github.com/ip11'
            },
            {
                id: "2",
                login: "anilraje122",
                avatar_url: "https://avatars2.githubusercontent.com/u/26355963?v=4",
                html_url: "https://github.com/anilraje122",
            },
            {
                id: "3",
                login: "sharu24",
                avatar_url: "https://avatars0.githubusercontent.com/u/29565360?v=4",
                html_url: "https://github.com/Sharu24"
            },
            {
                id: '4',
                login: 'aditya278',
                avatar_url: 'https://avatars2.githubusercontent.com/u/25431607?v=4',
                html_url: "https://github.com/aditya278"
            },
            {
                id: '5',
                login: 'pahalsonu',
                avatar_url: "https://avatars1.githubusercontent.com/u/68494713?v=4",
                html_url: "https://github.com/pahalsonu"
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                { this.state.users.map(user => (
                    <UserItem key={user.id}
                        user={user}
                    />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}


export default Users;