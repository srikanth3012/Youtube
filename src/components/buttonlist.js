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
    <div className="grid grid-flow-col">
      <BiChevronLeft
        className="h-8 w-8 mt-[3px] ml-1 hover:bg-gray-200 rounded-full"
        onClick={slideLeft}
      />

      <div className="flex overflow-hidden scroll-smooth " id="slider">
        {Buttonaray.map((item) => {
          if (item === "All") {
            return (
              <Link to={"/"}>
                <button
                  className="hover:bg-gray-400  bg-gray-200 text-xs rounded-md m-1 ml-3 h-8 p-2 w-auto whitespace-pre"
                  key={item}
                >
                  {item}
                </button>
              </Link>
            );
          } else {
            return (
              <Link to={"/results?search_query=" + item}>
                <button
                  className="hover:bg-gray-400  bg-gray-200 text-xs rounded-md m-1 ml-3 h-8 p-2 w-auto whitespace-pre"
                  key={item}
                >
                  {item}
                </button>
              </Link>
            );
          }
        })}
      </div>
      <BiChevronRight
        className="h-8 w-8 mt-0.5 hover:bg-gray-200 rounded-full mr-4"
        onClick={slideRight}
      />
    </div>
  );
};
export default ButtonList;
