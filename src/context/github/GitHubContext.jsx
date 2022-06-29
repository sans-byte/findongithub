import { createContext, useReducer } from "react";
import gitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const initialState = {
    Users: [],
    User: {},
    Repos: [],
    Loading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);
  // const [Users, setUsers] = useState([]);
  // const [Loading, setLoading] = useState(true);

  // Get intial users (testing purposes)
  // const getUsers = async () => {
  //   dispatch({
  //     type: "SET_LOADING",
  //   });
  //   const res = await fetch(`${GITHUB_URL}/users`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await res.json();
  //   // setUsers(data);
  //   // setLoading(false);
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: {
  //       users: data,
  //     },
  //   });
  // };
  //clear users
  // const clearUsers = () => {
  //   dispatch({
  //     type: "CLEAR_USERS",
  //   });
  // };

  return (
    <GitHubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
