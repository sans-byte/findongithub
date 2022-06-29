import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-b">Oops..</h1>
          <p className="text-5xl py-6 mb-8">404 - Page Not Found</p>
          <Link to="/" className="btn btn-primary">
            <FaHome className="text-xl mx-2"/>
            Back to home
        </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
