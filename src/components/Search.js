import React, { useState, useContext } from "react";

import githubContext from "../context/GitHub/githubContext";
import AlertContext from "../context/Alert/AlertContext";

function Search() {

  const GitHubContext = useContext(githubContext);
  const { showAlert } = useContext(AlertContext);

  const [text, setText] = useState("");
  const onChange = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      showAlert("Enter GitHub User Name", "danger");
    } else {
      GitHubContext.searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={onChange}
          placeholder="Search GitHub User ..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {GitHubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={GitHubContext.clearUsers}
        >
          Clear Users
        </button>
      )}
    </div>
  );
}

export default Search;
