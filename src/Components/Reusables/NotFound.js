import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center align-middle w-full h-screen justify-center ">
      <div>
        <Link className=" text-black px-2 hover:text-main-orange-color" to="/">
          Home Page
        </Link>
        <Link
          className=" text-black px-2 hover:text-main-orange-color"
          to="/search"
        >
          Search Page
        </Link>
      </div>
      <p className="text-lg text-center m-5">
        This is assessment task made by Ashwin Jagarwal.
      </p>
    </div>
  );
};

export default NotFound;
