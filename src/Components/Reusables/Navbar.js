import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-main-orange-color h-8 flex flex-row justify-between cursor-pointer">
      <span className="flex flex-row items-center">
        <p className="border text-white px-2 m-1 ">Y</p>
        <Link
          className=" font-extrabold text-main-text-color m-1 text-sm"
          to={"/"}
        >
          Hacker News
        </Link>
        <p className="text-main-text-color hover:text-white">new</p>
        <p className="text-main-text-color mx-1">|</p>
        <p className="text-main-text-color hover:text-white">past</p>
        <p className="text-main-text-color mx-1">|</p>
        <p className="text-main-text-color hover:text-white">comments</p>
        <p className="text-main-text-color mx-1">|</p>
        <p className="text-main-text-color hover:text-white">ask</p>
        <p className="text-main-text-color mx-1">|</p>
        <p className="text-main-text-color hover:text-white"> show</p>
        <p className="text-main-text-color mx-1">|</p>
        <p className="text-main-text-color hover:text-white">jobs</p>
        <p className="text-main-text-color mx-1">|</p>
        <p className="text-main-text-color hover:text-white">submit</p>
      </span>
      <a
        href="https://magenta-dango-dfc19b.netlify.app/"
        className="text-main-text-color hover:text-white m-1"
        target="_blank"
        rel="noreferrer"
      >
        Ashwin
      </a>
    </div>
  );
};

export default Navbar;
