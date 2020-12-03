import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';

import GithubReducer from './githubReducer';

import { SEARCH_USERS, SET_LOADING } from '../types'; //Actions (Action Types)


const GitHubState = (props) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search User Function which is going as props to Search Component
    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }

    const setLoading = () => dispatch({ type: SET_LOADING });


    return (
        <githubContext.Provider value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers
        }}>

            {props.children}
        </githubContext.Provider>
    )
}
export default GitHubState;