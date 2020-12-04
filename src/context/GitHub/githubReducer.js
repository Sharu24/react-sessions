import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  SET_REPOS,
  SET_ALL_USERS
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: []
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case SET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case SET_ALL_USERS:
      return {
        ...state,
        users : action.payload,
        loading : false
      }
    default:
      return state;
  }
};
