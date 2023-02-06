import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const searchRef = useRef();

  const searchSubmitHandler = () => {
    navigate("/search?query=" + searchRef.current.value);
  };

  return (
    <>
      <div className="h-0.5 bg-main-orange-color mb-3 "></div>
      <div className="hidden md:flex justify-center mb-2 m-auto ">
        <p className="text-xs inline m-1">Guidelines</p>
        <p className="text-xs inline m-1">|</p>

        <p className="text-xs inline m-1">FAQ</p>
        <p className="text-xs inline m-1">|</p>

        <p className="text-xs inline m-1">Lists</p>
        <p className="text-xs inline m-1">|</p>

        <p className="text-xs inline m-1">API</p>
        <p className="text-xs inline m-1">|</p>

        <p className="text-xs inline m-1">Security</p>
        <p className="text-xs inline m-1">|</p>

        <p className="text-xs inline m-1">Legal</p>
        <p className="text-xs inline m-1">|</p>

        <p className="text-xs inline m-1">Apply to YC</p>
        <p className="text-xs inline m-1">|</p>

        <p className="text-xs inline m-1">Contact</p>
      </div>
      <form
        className="flex justify-center items-center m-2 "
        onSubmit={searchSubmitHandler}
      >
        <label className="text-sm text-sub-heading-text-color inline mr-1">
          Search :
        </label>
        <input
          className="border-0.5 h-5 border-main-text-color"
          type="text"
          name="search"
          ref={searchRef}
        />
      </form>
      <a
        href="https://magenta-dango-dfc19b.netlify.app/"
        className="text-main-text-color  m-1 text-center"
        target="_blank"
        rel="noreferrer"
      >
        Made By Ashwin Jagarwal
      </a>
    </>
  );
};

export default Footer;
