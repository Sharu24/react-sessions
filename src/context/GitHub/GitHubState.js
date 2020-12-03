import React, { useReducer } from 'react';

import githubContext from './githubContext';

import GithubReducer from './githubReducer';

import { } from '../types'; //Actions (Action Types)


const GitHubState = (props) => {

    const initialState = {
        users: [1,2,3],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    return (
        <githubContext.Provider value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading
        }}>

            {props.children}
        </githubContext.Provider>
    )
}
export default GitHubState;