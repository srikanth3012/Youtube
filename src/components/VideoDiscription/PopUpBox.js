import React from "react";
import { AiOutlineFlag } from "react-icons/ai";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { WatchLater } from "../../utills/Slicers/watchlaterslicer";
import { useDispatch } from "react-redux";
const PopUpBox = ({ videoId_data }) => {
  const dispatcher = useDispatch();
  function watchlaterslicer(videoId_data) {
    console.log(videoId_data);
    dispatcher(WatchLater(videoId_data));
  }
  return (
    <div className="absolute right-[320px] -mt-12">
      <div className="m-2  bg-slate-100 w-32 p-5 h-auto  rounded-2xl flex  flex-col gap-2">
        <div className="flex">
          <AiOutlineFlag className="mr-1" size={20} />
          <h1>Download</h1>
        </div>
        <div className="flex">
          <MdOutlinePlaylistAdd className="mr-1" size={20} />
          <button
            onClick={() => {
              watchlaterslicer(videoId_data);
            }}
          >
            Save
          </button>
        </div>
        <div className="flex">
          <AiOutlineFlag className="mr-1" size={20} />
          <h1>Report</h1>
        </div>
      </div>
    </div>
  );
};

export default PopUpBox;
