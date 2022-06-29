import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import GitHubContext from "../../context/github/GitHubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GitActions";

function UserSearch() {
  const [text, setText] = useState("");

  const { Users, dispatch } = useContext(GitHubContext);
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please input something...", "error");
    } else {
      // TODO  : Search for users
      dispatch({
        type: "SET_LOADING",
      });

      const users = await searchUsers(text);

      dispatch({
        type: "GET_USERS",
        payload: {
          users,
        },
      });
      setText("");
    }
  };

  return (
    <div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <form className="form-control mr-5" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full bg-gray-300 text-black"
              value={text}
              onChange={(e) => {
                e.preventDefault();
                setText(e.target.value);
              }}
            />
            <button className="btn btn-square w-36" type="submit">
              <FiSearch className="text-2xl" />
            </button>
          </div>
          <div></div>
        </form>
        {Users.length > 0 && (
          <div>
            <button
              className="btn btn-ghost btn-md"
              onClick={(e) => {
                e.preventDefault();
                dispatch({
                  type: "CLEAR_USERS",
                });
              }}
            >
              clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
