import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-full gap-4">
      <div className="flex items-center gap-3">
        <h2 className="text-blue-700 font-bold text-5xl">404</h2>
        <p className="text-gray-800 font-bold text-5xl">Page Not Found</p>
      </div>
      <p className="text-gray-600 font-bold text-base">
        Looks like you visited wrong link go broken link. Sorry for any trouble
        caused
      </p>
      <div className="flex items-center gap-3">
        <Link to="/" className="bg-blue-700 text-white px-4 py-2 rounded-md">
          Go To Homepage
        </Link>
        <Link
          to="/sign-in"
          className="border-blue-700 text-blue-700 border-2 px-4 py-2 rounded-md"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};
