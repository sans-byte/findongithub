import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
import GitHubContext from "../../context/github/GitHubContext";


function UserResults() {
  const { Users, Loading } = useContext(GitHubContext);

  if (!Loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {Users.map((user) => (
          <UserItem user={user} key={user.id}/>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center">
       <Spinner/>
      </div>
    );
  }
}

export default UserResults;
