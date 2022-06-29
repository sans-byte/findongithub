import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-neutral mb-12">
        <div className="xl:max-w-7xl container mx-auto">
          <div className="flex-none px-2 mx-2">
            <FaGithub className="inline pr-2 text-3xl" />
            <Link to="/" className="text-bold text-lg align-middle">
              FindOnGitHub
            </Link>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="justify-end flex">
              <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                Home
              </Link>
              <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
