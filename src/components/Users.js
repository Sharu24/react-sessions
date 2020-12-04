import React, { useEffect, useContext } from "react";

import UserItem from "./UserItem";
import Loading from "./Loading";
import githubContext from "../context/GitHub/githubContext";

function Users() {
  const GithubContext = useContext(githubContext);
  const { users, loading, setAllUsers } = GithubContext;

  useEffect(() => {
    setAllUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
