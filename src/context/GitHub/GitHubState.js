import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";

import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  SET_REPOS,
  SET_ALL_USERS
} from "../types"; //Actions (Action Types)

const GitHubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search User Function which is going as props to Search Component
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  const setAllUsers = async () => {
    setLoading();
    const res = await axios.get("https://api.github.com/users");
    dispatch({
      type : SET_ALL_USERS,
      payload : res.data
    })
  }

  //Get Single User Data
  const getUser = async username => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({ type: GET_USER, payload: res.data });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Get User Repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    dispatch({ type: SET_REPOS, payload: res.data });
  };

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        setAllUsers
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};
export default GitHubState;
