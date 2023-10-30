import React from "react";
import { useState, useEffect } from "react";
import { SEARCH_RESULTS_API } from "../utills/constants";
import { Link, useSearchParams } from "react-router-dom";
import VSearchcard from "../utills/videoResultCard";
import ButtonList from "./buttonlist";

const SearchResults = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [param] = useSearchParams("");
  const searchItem = param.get("search_query");

  useEffect(() => {
    youtubeData();
    // eslint-disable-next-line
  }, [searchItem]);

  const youtubeData = async () => {
    const data = await fetch(SEARCH_RESULTS_API + `&q=${searchItem}`);
    const json = await data.json();
    setSearchResult(json.items);
    console.log(json.items);
  };
  return !searchResult ? null : (
    <>
      <div className="col-span-11 ">
        <ButtonList />

        <div className="h-[1000px] pl-10">
          {searchResult.map((item) => (
            <li key={item.id.etag} className=" list-none   ">
              <Link to={"/watch?v=" + item.id.videoId}>
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
