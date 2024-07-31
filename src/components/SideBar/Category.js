import React from "react";
import { MdOutlineVideoLibrary, MdHistory } from "react-icons/md";

import { BsFilePlay, BsClock } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="shadow-sm">
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <MdOutlineVideoLibrary className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Library</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <MdHistory className=" mr-4 h-6 w-6" />
        <Link to="/feed/history">
          <h1>History</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <BsFilePlay className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Your Videos</h1>
        </Link>
      </div>

      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <BsClock className=" mr-4 h-5 w-5" />
        <Link to="/feed/watch">
          <h1>Watch Later</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <AiOutlineLike className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Liked Videos</h1>
        </Link>
      </div>
    </div>
  );
};

export default Category;
