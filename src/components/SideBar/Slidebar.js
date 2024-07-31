import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineSettings, MdOutlineFeedback } from "react-icons/md";
import { AiOutlineFlag } from "react-icons/ai";
import { TbHelp } from "react-icons/tb";
import SubScription from "./SubScription";
import Explore from "./Explore";
import MoreYoutube from "./MoreYoutube";
import HomeButtons from "./HomeButtons";
import Category from "./Category";
const SlideBar = () => {
  return (
    <>
      <div className=" w-52 h-[40em]  rounded-md overflow-hidden   hover:overflow-y-scroll  hover:scrollbar-thumb-slate-500 hover:scrollbar-thin hover:scrollbar-rounded-xl ">
        <div className="pl-2 pr-2 ">
          <HomeButtons />
          <Category />
          <SubScription />
          {/*Explore */}
          <Explore />
          {/* More from YouTube */}
          <h1 className="pl-0.5 text-lg py-2">More from YouTube</h1>
          <MoreYoutube />
          <div className="shadow-sm">
            <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
              <MdOutlineSettings className=" mr-4 h-5 w-5" />
              <Link to="/feed/history">
                <h1>Settings</h1>
              </Link>
            </div>
            <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
              <AiOutlineFlag className=" mr-4 h-5 w-5" />
              <Link to="/feed/history">
                <h1>Report History</h1>
              </Link>
            </div>
            <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
              <TbHelp className=" mr-4 h-5 w-5" />
              <Link to="/feed/history">
                <h1>Help</h1>
              </Link>
            </div>
            <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
              <MdOutlineFeedback className=" mr-4 h-5 w-5" />
              <Link to="/feed/history">
                <h1>Send Feedback</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="pl-2 mt-5">
          <h1 className="m-2">
            About Press Copyright Contact Us Creators Addvertise Developers
          </h1>
          <p className="m-2">Terms Privacy Policy & Safety</p>
          <p className="m-2">How Youtube works</p>
          <p className="m-2">Test New Features</p>
        </div>
      </div>
    </>
  );
};
export default SlideBar;
