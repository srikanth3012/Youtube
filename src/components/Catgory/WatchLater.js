import React from "react";
import { useSelector } from "react-redux";
import { HSearchcard } from "../Cards/videoResultCard";
import CatgorySideCard from "../Cards/CatgorySideCard";
const WatchLater = () => {
  const select = useSelector((store) => store?.WatchLater?.WatchLaterList);

  return select.length === 0 ? (
    <div className="flex  justify-items-center">
      <h1 className="text-black text-3xl ">No Results</h1>
    </div>
  ) : (
    <>
      <div className="w-[25%] ">
        {" "}
        <CatgorySideCard video={select[0]} VideosLength={select.length} />
      </div>
      <div>
        {select.map((videoListInfo) => (
          <li key={videoListInfo.id} className=" list-none">
            <HSearchcard info={videoListInfo} />
          </li>
        ))}
      </div>
    </>
  );
};
export default WatchLater;
