import React from "react";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
const ButtonList = () => {
  const Buttonaray = [
    "All",
    "Mixes",
    "Background Music",
    "Lofi",
    "Mantra",
    "Home",
    "Suggestions",
    "Sports",
    "Movies",
    "comedy",
    "Gaming",
    "Css",
    "Trailers",
    "Watched",
    "Jabardasth",
    "Live",
    "Music",
    "Arjit singh",
    "Recently Added",
    "Data structurex",

    "New to You",
  ];
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  return (
    <div className="flex">
      <BiChevronLeft
        className="h-8 w-8 mt-1.5 hover:bg-gray-200 rounded-full"
        onClick={slideLeft}
      />

      <div
        className="flex overflow-hidden scroll-smooth w-[1200px]  md:w-w-[600px] lg:w-w-[800px] xl:w-[1000px] 2xl:w-[1200px]"
        id="slider"
      >
        {Buttonaray.map((item) => (
          <Link to={"/results?search_query="}>
            <button
              className="hover:bg-gray-400  bg-gray-200 text-sm rounded-md m-1 ml-3 h-10 p-2 w-auto whitespace-pre"
              key={item}
            >
              {item}
            </button>
          </Link>
        ))}
      </div>
      <BiChevronRight
        className="h-8 w-8 mt-1.5 hover:bg-gray-200 rounded-full"
        onClick={slideRight}
      />
    </div>
  );
};
export default ButtonList;
