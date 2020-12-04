import React, { useEffect, Fragment, useContext } from "react";

//Import Loading Component
import Loading from "./Loading";
import Repos from "./Repos";
import { Link } from "react-router-dom";

import githubContext from "../context/GitHub/githubContext";

//user, loading, getUser, repos, getUserRepos, match
function User({ match }) {
  const GitHubContext = useContext(githubContext);

  const { user, loading, getUser, getUserRepos } = GitHubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable :{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "150px" }}
            alt=""
          />
          <h1>{name}</h1>
          <p>Location : {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h2>Bio</h2>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noreferrer"
            alt="Profile"
          >
            {" "}
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <b> Username : </b> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <b> Company : </b> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <b> Website : </b> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers : {followers}</div>
        <div className="badge badge-success">Following : {following}</div>
        <div className="badge badge-light">
          Public Repositories : {public_repos}
        </div>
        <div className="badge badge-dark">Private Gists : {public_gists}</div>
      </div>
      <Repos />
    </Fragment>
  );
}

export default User;
