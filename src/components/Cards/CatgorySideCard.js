import React from "react";
import { IoIosShuffle, IoMdDownload } from "react-icons/io";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoPlaySharp } from "react-icons/io5";

const CatgorySideCard = ({ video, VideosLength }) => {
  return (
    <div className="bg-slate-800 h-[95%] rounded-2xl mx-[2%] text-white px-6 py-6  ">
      <div className="text-transparent hover:text-white">
        {/* black gradient */}
        <div className="absolute z-20 hover:bg-black hover:bg-opacity-60 w-[18rem] rounded-2xl h-40 ">
          <button className="relative z-40 top-14 left-24  text-2xl">
            {" "}
            Play all
          </button>
        </div>{" "}
        <img
          className=" w-[18rem] h-40 rounded-2xl"
          alt="logo "
          src={video.snippet.thumbnails.medium.url}
        />
      </div>

      <div className="py-2 px-1">
        <h1 className="text-3xl font-bold ">Watch Later</h1>
        <h6 className="text-sm text-gray-400">
          {VideosLength} videos <span className="px-1">No Views</span>
          <span> Last Update on 05-Sep</span>
        </h6>
      </div>
      <div className="flex gap-2 py-2">
        <IoMdDownload
          className="w-10 h-10 py-3 bg-gray-700 rounded-full"
          size={30}
        />
        <FaEllipsisVertical className="w-10 h-10 py-3 bg-gray-700 rounded-full" />
      </div>
      <div className="flex gap-1 my-3">
        <div className="flex gap-2 bg-white text-black font-semibold w-[50%] h-9 px-6 rounded-l-full rounded-r-full">
          {" "}
          <IoPlaySharp className="w-5 h-10 " />
          <button>Play all</button>
        </div>
        <div className="flex gap-1 bg-gray-600 text-white font-semibold w-[50%] h-9 px-6 rounded-l-full rounded-r-full">
          <IoIosShuffle className="w-6 h-9 " /> <button> Shuffle</button>
        </div>
      </div>
    </div>
  );
};

export default CatgorySideCard;
