import React from "react";
import RepoItem from "./RepoItem";

function RepoList({ repos }) {
  return (
    <>
      <div className="rounded-lg shadow-lg card my-10 w-full">
        <div className="card-body">
          <div className=" card-title text-white text-3xl font-bold">
            Repositories
          </div>
          <div>
            {repos.map((repo) => (
              <RepoItem repo={repo} key={repo.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RepoList;
