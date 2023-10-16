import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utills/slideSlicer";
import { Youtube_Search } from "../utills/constants";
import { chaceResults } from "../utills/searchSlicer";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsSearch, BsFillMicFill, BsBell } from "react-icons/bs";
import { TbVideoPlus } from "react-icons/tb";
import Profile from "./profile";
const Header = () => {
  const [search, setSearch] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [searchSuggestionOff, setSearchSuggestionOff] = useState(true);
  const [isProfile, setIsProfile] = useState(false);

  const dispatcher = useDispatch();
  const isMenuOpen = () => {
    dispatcher(toggleMenu());
  };
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSearchSuggestion(searchCache[search]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [search]);

  const getSearchSuggestion = async () => {
    const data = await fetch(Youtube_Search + search);
    const json = await data.json();

    setSearchSuggestion(json[1]);
    dispatcher(
      chaceResults({
        [search]: json[1],
      })
    );
  };

  return (
    <>
      <div className=" flex">
        <div className="grid grid-flow-col   items-center ">
          <div className="ml-6 flex  col-span-1 items-center">
            <FaBars
              className="h-8 cursor-pointer w-6 "
              onClick={() => {
                isMenuOpen();
              }}
            />

            <Link to="/">
              <img
                className="h-14 mx-2 ml-6"
                alt="youtube"
                src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
              />
            </Link>
          </div>
          <div className="ml-64">
            <div className="col-span-10  flex py-4 ">
              <input
                className="border border-gray-400 w-[550px]  h-10 rounded-l-full"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onFocus={() => {
                  setSearchSuggestionOff(true);
                }}
                onBlur={() => {
                  setSearchSuggestionOff(false);
                }}
              />
              <div>
                <Link to={"/results?search_query=" + search}>
                  <button>
                    <div className="h-10 border w-16 border-gray-400 bg-gray-100 rounded-r-full">
                      <BsSearch className="h-5 w-5 ml-5 mt-2.5" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            {searchSuggestionOff && (
              <div>
                <ul className="fixed bg-white w-96 rounded-lg">
                  {searchSuggestion.map((item) => (
                    <Link to={"/results?search_query=" + item} key={item}>
                      <li className="m-3  flex hover:bg-gray-300" key={item}>
                        <div className="pt-1 pr-1"></div>
                        <BsSearch className="h-3 w-3 mt-1.5 mr-2" />
                        {item}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="ml-4 bg-gray-200 w-10 h-10 rounded-full mb-2">
            <BsFillMicFill className=" h-5 m-2.5 w-5 pb-0.5 " />
          </div>
        </div>
        <div className="col-span-1">
          <div className="ml-64 py-[19px] flex">
            <div>
              <TbVideoPlus className="w-7 h-6 mt-2" />
            </div>
            <div>
              <BsBell className="w-6 h-5 mt-2 ml-3.5" />
            </div>
            <div>
              {!isProfile ? (
                " "
              ) : (
                <div className="fixed bg-gray-100 right-32 top-10 w-72 h-96 rounded-lg">
                  <Profile />
                </div>
              )}
              <button
                onClick={() => {
                  !isProfile ? setIsProfile(true) : setIsProfile(false);
                }}
              >
                <CgProfile className="w-10 h-8 ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
