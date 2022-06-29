import React, { useContext, useEffect } from "react";
import {
  FaStore,
  FaUserFriends,
  FaUsers,
  FaCode,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/layouts/Spinner";
import RepoList from "../components/repos/RepoList";
import GitHubContext from "../context/github/GitHubContext";
import { getUserAndRepos } from "../context/github/GitActions";

function User() {
  const { User, Loading, Repos, dispatch } = useContext(GitHubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      // const userData = await singleUser(params.login);
      // dispatch({
      //   type: "GET_USER",
      //   payload: {
      //     user: userData,
      //   },
      // });
      // const userRepos = await getRepos(params.login);
      // dispatch({
      //   type: "GET_REPOS",
      //   payload: {
      //     repos: userRepos,
      //   },
      // });
      const getUserData = await getUserAndRepos(params.login);

      dispatch({
        type: "GET_USER_AND_REPOS",
        payload: {
          userdata: getUserData,
        },
      });
    };
    getUserData();
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hirable,
  } = User;

  if (Loading) {
    return (
      <>
        <div className="flex w-full justify-center items-center">
          <Spinner />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
              Back to search
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 mg:grid-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
              <div className="rounded-lg shadow-xl card image-full">
                <figure>
                  <img src={avatar_url} alt="" />
                </figure>
                <div className="card-body justify-end">
                  <div className="text-white">
                    <h2 className="card-title mb-0">{name}</h2>
                    <p className="">{login}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="mb-4 align-middle">
                <h1 className="text-3xl card-title text-white">
                  {name}
                  <div className="ml-2 mr-1 badge badge-success badge-outline">
                    {type}
                  </div>
                  {hirable && (
                    <div className="mx-1 badge badge-info badge-outline">
                      Hirable
                    </div>
                  )}
                </h1>
                <p className="flex flex-wrap">{bio}</p>
                <div className="mt-4 card-actions mb-6">
                  <a
                    href={html_url}
                    target={"_blank"}
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    Visit Profile
                  </a>
                </div>
                <div className="w-full rounded-lg shadow-md bg-base-100 stats mt-10">
                  {location && (
                    <div className="stat">
                      <div className="stat-title text-md">Location</div>
                      <div className="stat-value text-lg">{location}</div>
                    </div>
                  )}
                  {blog && (
                    <div className="stat">
                      <div className="stat-title text-md">Website</div>
                      <div className="stat-value text-lg">
                        <a
                          href={`https://${blog}`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          {blog}
                        </a>
                      </div>
                    </div>
                  )}
                  {twitter_username && (
                    <div className="stat">
                      <div className="stat-title text-md">Website</div>
                      <div className="stat-value text-lg">
                        <a
                          href={`http://twitter.com/${twitter_username}`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          {twitter_username}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-5 rounded-lg shadow-md bg-base-100 stats">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title">Followers</div>
              <div className="stat-value">{followers}</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title">Followings</div>
              <div className="stat-value">{following}</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title">Public Gists</div>
              <div className="stat-value">{public_gists}</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCode className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title">Public Repositories</div>
              <div className="stat-value">{public_repos}</div>
            </div>
          </div>
          <RepoList repos={Repos} />
        </div>
      </>
    );
  }
}

export default User;
