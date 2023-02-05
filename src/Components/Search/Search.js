import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HLogo from "../../Assets/Icons/H-logo.webp";
import searchIcon from "../../Assets/Icons/search.PNG";
import settings from "../../Assets/Icons/settings.PNG";
import algolia from "../../Assets/Icons/algolia.PNG";
import share from "../../Assets/Icons/share.PNG";
import axios from "axios";
import Story from "../Reusables/Story";

const Search = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let searchParams = new URLSearchParams(location.search);
  let params = {};

  for (let key of searchParams.keys()) {
    params[key] = searchParams.get(key);
  }

  const [searchText, setSearchText] = useState(params.query);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [customDate, setCustomDate] = useState(0);

  const tagRef = useRef();
  const dateRef = useRef();

  let pages = [];
  // const timeRef = useref("")

  useEffect(() => {
    document.title = "Search | Ashwin";
    navigate("/search");
    onSubmitHandler();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const onSubmitHandler = async (e) => {
    if (e) {
      e.preventDefault();
    }

    // if (e?.target?.value) {
    let date = new Date();
    const val = e?.target?.value;
    let finalVal = 0;
    if (val === "24h") {
      date.setHours(date.getHours() - 24);
      finalVal = date.toISOString();
    } else if (val === "week") {
      let pastWeek = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
      finalVal = pastWeek.toISOString();
    } else if (val === "month") {
      date.setMonth(date.getMonth() - 1);
      finalVal = date.toISOString();
    } else if (val === "year") {
      date.setFullYear(date.getFullYear() - 1);
      finalVal = date.toISOString();
    }
    setCustomDate(finalVal);

    let url =
      "https://hn.algolia.com/api/v1/" +
      dateRef.current.value +
      "?hitsPerPage=30&page=" +
      page +
      (!searchText ? "" : "&query=" + searchText) +
      (tagRef.current.value === "all" ? "" : "&tags=" + tagRef.current.value) +
      (finalVal ? "&numericFilters=created_at_i>=" + finalVal : "");

    try {
      const { data } = await axios.get(url);
      setHits(data.hits);
      setTimeTaken(data.processingTimeMS);
      setTotalPages(data.nbPages);
      setTotalResults(data.nbHits);
    } catch (error) {
      setHits([]);
    }
  };

  const onchangepageHandler = (p) => {
    setPage(p - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (totalPages - page + 1 > 5) {
    for (let i = 1; i <= 5; i++) {
      pages.push(page + i);
    }
  } else {
    for (let i = page + 1; i <= totalPages; i++) {
      pages.push(i);
    }
  }

  return (
    <div className="bg-black min-h-screen">
      <form
        className="cursor-pointer min-h-full lg:w-10/12 sm:w-auto bg-main-background-color m-auto pb-3"
        onSubmit={onSubmitHandler}
      >
        <div className="bg-main-orange-color-1 h-14 flex flex-row items-center gap-2 ">
          <img src={HLogo} alt="logo" className="h-12 m-2" />
          <div>
            <p className="text-lg leading-none flex-shrink-0 hidden lg:block">
              Search <br /> Hacker news
            </p>
          </div>
          <div
            className="h-10 w-9/12  bg-white
          flex flex-row items-center justify-evenly"
          >
            <img
              src={searchIcon}
              alt="search icon"
              className="h-6 flex-shrink-0"
            />
            <input
              type="text"
              className="h-4/5 w-9/12 border-none focus:outline-none focus:shadow-outline"
              placeholder="Search stories by title, url or author"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
            <p className=" text-sm flex-shrink-0 text-sub-heading-text-color hidden lg:block">
              Search by
            </p>
            <img
              src={algolia}
              alt="algolia icon"
              className="h-6  hidden sm:block"
            />
          </div>
          <Link
            to="/"
            className="text-main-text-color flex flex-row items-center m-1"
          >
            <img
              src={settings}
              alt="settings icon"
              className="h-6 m-2 hidden lg:block"
            />
            Home
          </Link>
        </div>
        <div className="flex flex-row m-3 h-12 justify-between ">
          <div className="flex flex-row items-center gap-4  ">
            <p className=" text-sm inline text-sub-heading-text-color">
              Search
            </p>
            <select
              className="bg-main-background-color  border-text-sub-heading-text-color px-1 border-2 "
              ref={tagRef}
              onChange={onSubmitHandler}
            >
              <option className="text-black" value="all">
                All
              </option>
              <option className="text-black" value="story">
                Stories
              </option>
              <option className="text-black" value="comment">
                Comments
              </option>
            </select>

            <p className="text-sm inline text-sub-heading-text-color">by</p>
            <select
              className="bg-main-background-color  border-text-sub-heading-text-color px-1 border-2 "
              ref={dateRef}
              onChange={onSubmitHandler}
            >
              <option className="text-black" value="search">
                Popularity
              </option>
              <option className="text-black" value="search_by_date">
                Date
              </option>
            </select>

            <p className="text-sm inline text-sub-heading-text-color">for</p>
            <select
              className="bg-main-background-color  border-text-sub-heading-text-color px-1 border-2"
              onChange={(e) => onSubmitHandler(e)}
            >
              <option className="text-black" value="all">
                All time
              </option>
              <option className="text-black" value="24h">
                Last 24h
              </option>
              <option className="text-black" value="week">
                Past Week
              </option>
              <option className="text-black" value="month">
                Past Month
              </option>
              <option className="text-black" value="year">
                Past Year
              </option>
            </select>
          </div>
          <div className=" flex flex-row gap-2 items-center">
            <p className=" text-sm inline text-main-text-color">
              {totalResults.toLocaleString()} results ({timeTaken / 1000}{" "}
              seconds)
            </p>
            <img src={share} alt="share icon" className="h-5" />
          </div>
        </div>
        <div className="bg-main-background-color  min-h-full">
          {hits.length > 0 &&
            hits.map((hit, index) => (
              <Story
                hit={hit}
                page={0}
                minutes={12}
                hours={12}
                days={12}
                key={hit.objectID}
              />
            ))}
        </div>

        {hits.length === 0 && (
          <div className="bg-main-background-color h-screen">
            <p className="text-lg snap-center text-center m-5">
              No data found.
            </p>
          </div>
        )}
        <div className="flex flex-row items-center justify-center">
          {page === 0 ? (
            ""
          ) : (
            <button
              className={`border text-sub-heading-text-color px-2 m-1`}
              onClick={() => onchangepageHandler(page)}
            >
              {"<<"}
            </button>
          )}
          {pages.map((p, ind) => (
            <button
              className={`border text-sub-heading-text-color px-2 m-1 ${
                page + 1 === p &&
                "border-main-orange-color-1 text-main-orange-color-1"
              }`}
              onClick={() => onchangepageHandler(p)}
              key={p}
            >
              {p}
            </button>
          ))}
          {page + 1 === totalPages
            ? ""
            : hits.length > 0 && (
                <button
                  className={`border text-sub-heading-text-color px-2 m-1`}
                  onClick={() => onchangepageHandler(page + 2)}
                >
                  {">>"}
                </button>
              )}
        </div>
      </form>
    </div>
  );
};

export default Search;
