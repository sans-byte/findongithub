import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  //   const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  const res = await github.get(`/search/users?${params}`);

//   const { items } = await res.json();

  return res.data.items;
};

//get a single user

// export const singleUser = async (login) => {
//   const res = await fetch(`${GITHUB_URL}/users/${login}`, {
//     method: "GET",
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (res.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await res.json();
//     // dispatch({
//     //   type: "GET_USER",
//     //   payload: {
//     //     user: data,
//     //   },
//     // });
//     return data;
//   }
// };

// get repositories

// export const getRepos = async (login) => {
//   const res = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
//     method: "GET",
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   const data = await res.json();
//   //   dispatch({
//   //     type: "GET_REPOS",
//   //     payload: {
//   //       repos: data,
//   //     },
//   //   });

//   return data;
// };

// single function to get single user and get repos

export const getUserAndRepos = async(login)=>{

    const [user,repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ]);

    console.log(user,repos);

    return {user:user.data, repos:repos.data}
}