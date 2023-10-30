import React from "react";
import { useSelector } from "react-redux";
import { HSearchcard } from "../utills/videoResultCard";
const WatchLater = () => {
  const select = useSelector((store) => store.WatchLater.WatchLaterList);

  return !select ? (
    "No Result"
  ) : (
    <div>
      {select.map((videoListInfo) => (
        <li key={videoListInfo.id} className="grid grid-cols-11 h-screen">
          <HSearchcard info={videoListInfo} />
        </li>
      ))}
    </div>
  );
};
export default WatchLater;
