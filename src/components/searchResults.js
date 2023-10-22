import React from "react";
import { useState, useEffect } from "react";
import { Youtubedata } from "../utills/constants";
import { Link, useSearchParams } from "react-router-dom";
import VSearchcard from "../utills/videoResultCard";
import SearchFilter from "../utills/searchFillter";
import ButtonList from "./buttonlist";

const SearchResults = () => {
  const [fillterVideo, setfillterVideo] = useState([]);
  const [param] = useSearchParams("");
  const searchItem = param.get("search_query");

  useEffect(() => {
    youtubeData();
    // eslint-disable-next-line
  }, [searchItem]);

  const youtubeData = async () => {
    const data = await fetch(Youtubedata);
    const json = await data.json();
    const filtterdata = SearchFilter(searchItem, json.items);
    setfillterVideo(filtterdata);
  };
  return (
    <>
      <div>
        <ButtonList />

        <div className="pl-10">
          {fillterVideo.map((item) => (
            <li key={item.id} className=" list-none hover:border border-white ">
              <Link to={"/watch?v=" + item.id}>
                <VSearchcard info={item} />
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
export default SearchResults;
