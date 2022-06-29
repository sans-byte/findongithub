import React from "react";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
  return (
    <div className="card shadow-md compact card-side bg-base-200">
      <div className="card-body flex flex-row items-center">
        <img
          src={avatar_url}
          alt="Profile"
          className="h-16 w-16 rounded-full"
        />
        <div className="mx-4">
          <h2 className="card-title text-white"> {login} </h2>
          <Link
            to={`/user/${login}`}
            className="text-xs text-base-content opacity-60"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
