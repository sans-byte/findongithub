const gitHubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        User: action.payload.userdata.user,
        Repos: action.payload.userdata.repos,
        Loading: false,
      };
    // case "SEARCH_USERS":
    //   return {
    //     ...state,
    //     Users: action.payload.users,
    //     Loading: false,
    //   };
    case "GET_USERS":
      return {
        ...state,
        Users: action.payload.users,
        Loading: false,
      };
    // case "GET_USER":
    //   return {
    //     ...state,
    //     User: action.payload.user,
    //     Loading: false,
    //   };
    // case "GET_REPOS":
    //   return {
    //     ...state,
    //     Repos: action.payload.repos,
    //   };
    case "SET_LOADING":
      return {
        ...state,
        Loading: true,
      };
    // case "CLEAR_USERS":
    //   return {
    //     ...state,
    //     Users: [],
    //   };
    default:
      return state;
  }
};

export default gitHubReducer;
