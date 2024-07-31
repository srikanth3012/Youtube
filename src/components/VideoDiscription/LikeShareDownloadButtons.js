import React from "react";
import { BiSolidDownload, BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

const LikeShareDownloadButtons = ({ videoListInfo, setBox }) => {
  return (
    <div className="flex items-center">
      <div className=" pl-1 pt-1  flex bg-slate-200 rounded-l-3xl  h-8 text-sm">
        <AiOutlineLike className="w-10 h-6 pl-3" />
        <h1 className="py-0.5 pr-2">{videoListInfo?.statistics?.likeCount}</h1>
      </div>
      <h1 className="text-gray-500 bg-slate-200 h-8 pr-1">|</h1>
      <div className=" pl-1 pt-1  flex bg-slate-200 rounded-r-3xl  h-8 text-sm">
        <div className="shadow-gray-900">
          <AiOutlineDislike className="w-10 h-6 pl-3 transform scale-x-[-1] " />
        </div>
      </div>
      <div className="m-2 pb-1  flex  bg-slate-200 rounded-3xl w-20 h-8  text-sm items-center ">
        <RiShareForwardLine className="w-7 pl-2 h-6 " />
        <h1 className="pl-1">Share</h1>
      </div>
      <div className="m-1 pl-1 pb-1  flex  bg-slate-200 rounded-3xl w-32 h-8  text-sm items-center ">
        <BiSolidDownload className="w-7 pl-2  h-6 " />
        <h1 className="pl-1">Download</h1>
      </div>
      <div className="m-1  bg-slate-200 rounded-3xl w-8  h-8  text-sm items-center hover:bg-white hover:border border-gray-900">
        <BiDotsVerticalRounded
          className="w-7 m-[3px]  h-5 mt-1.5 "
          onClick={() => {
            setBox((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
};

export default LikeShareDownloadButtons;
