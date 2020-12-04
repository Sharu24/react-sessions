import React, {useContext } from 'react';

import githubContext from "../context/GitHub/githubContext";

import RepoItem from './RepoItem';

function Repos() {
    const GitHubContext = useContext(githubContext);
    const { repos } = GitHubContext;

    return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />)
}

export default Repos;