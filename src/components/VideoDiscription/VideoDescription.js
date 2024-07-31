import React, { useState } from "react";

const VideoDescription = ({ videoListInfo }) => {
  const [more, setMore] = useState(false);
  return (
    <div>
      {!more ? (
        <div className="m-1 w-[950px] pr-20 p-3 bg-slate-100 rounded-md  ">
          <div className="h-20 overflow-hidden ">
            <h1 className=" ml-2 text-md font-bold">
              {videoListInfo?.statistics?.viewCount} Views
            </h1>
            <h1 className=" text-sm p-2 whitespace-pre-line ">
              {videoListInfo?.snippet?.description}
            </h1>
          </div>
          <button
            className=" text-base font-semibold text-blue-500 hover:border border-white"
            onClick={() => setMore(true)}
          >
            ...more
          </button>
        </div>
      ) : (
        <div className="m-1  w-[950px] pr-20 p-3 bg-slate-100 rounded-md shadow-lg">
          <h1>{videoListInfo?.statistics?.viewCount}</h1>
          <h1 className=" text-sm p-2 whitespace-pre-line ">
            {videoListInfo?.snippet?.description}
          </h1>
          <button
            className=" text-base font-semibold text-blue-500 hover:border border-white"
            onClick={() => setMore(false)}
          >
            Showless
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoDescription;
