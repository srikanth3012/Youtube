import React from "react";
import { MdHomeFilled, MdOutlineVideoLibrary } from "react-icons/md";
import { FiPlayCircle } from "react-icons/fi";
import { BsCollectionPlay } from "react-icons/bs";
import { Link } from "react-router-dom";

const NormalSideBarLohos = () => {
  return (
    <div>
      <div className="pl-3 mt-4 ">
        <div className="pl-2 items-center hover:bg-gray-100 rounded-lg ">
          <MdHomeFilled className=" mr-4 h-6 w-6 ml-1" />
          <Link to="/">
            <h1 className="text-xs mt-1.5">Home</h1>
          </Link>
        </div>
        <div className="p-2 items-center hover:bg-gray-100 rounded-lg mt-4">
          <FiPlayCircle className=" mr-4 h-5 w-5 ml-1 " />
          <Link to="/">
            <h1 className="text-xs mt-1.5">Shorts</h1>
          </Link>
        </div>
        <div className="  items-center hover:bg-gray-100 rounded-lg mt-4">
          <BsCollectionPlay className=" mr-4 h-5 w-5 ml-3" />
          <Link to="/">
            <h1 className="text-xs mt-1.5">Subscriptions</h1>
          </Link>
        </div>

        <div>
          <div className="p-2 items-center hover:bg-gray-100 rounded-lg mt-4">
            <MdOutlineVideoLibrary className=" mr-4 h-5 w-5 ml-1" />
            <Link to="/">
              <h1 className="text-xs mt-1.5">Library</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalSideBarLohos;
