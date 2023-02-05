import React, { useEffect, useState } from "react";
import Story from "../Reusables/Story";
import Navbar from "../Reusables/Navbar";
import Footer from "../Reusables/Footer";
import axios from "axios";

const Home = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "New Links | Ashwin";
    getHits();
  }, [page]);

  const getHits = async () => {
    try {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?numericFilters=created_at_i>=0&hitsPerPage=30&page=${page}&tags=story`
      );
      setData(data.hits);
    } catch (error) {
      setData([]);
    }
  };

  const changePage = () => {
    setPage((page) => page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col mx-auto w-4/5 m-auto my-2 bg-main-background-color lg:w-10/12 sm:w-auto">
      <Navbar />
      <div className="bg-main-background-color h-full">
        {data.length > 0 ? (
          <>
            {data.map((hit, index) => {
              const givenTime = new Date(hit.created_at);
              const now = new Date();

              const timeDiff = now - givenTime;

              const minutes = Math.floor(timeDiff / 1000 / 60);
              const hours = Math.floor(minutes / 60);
              const days = Math.floor(hours / 24);

              return (
                <Story
                  hit={hit}
                  page={page}
                  index={index}
                  minutes={minutes}
                  hours={hours}
                  days={days}
                  key={hit.objectID}
                />
              );
            })}
            <button className="text-sm  ml-12 mb-3 mt-3" onClick={changePage}>
              More
            </button>
          </>
        ) : (
          <div className="bg-main-background-color h-screen">
            <p className="text-lg snap-center text-center m-5">Loading ...</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
