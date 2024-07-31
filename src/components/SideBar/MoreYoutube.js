import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { SiYoutubestudio, SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { Link } from "react-router-dom";

const MoreYoutube = () => {
  return (
    <div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <AiFillYoutube className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>YouTube Premium</h1>
        </Link>
      </div>
      <div className="shadow-sm">
        <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
          <SiYoutubestudio className=" mr-4 h-5 w-5" />
          <Link to="/feed/history">
            <h1>YouTube Studio</h1>
          </Link>
        </div>
        <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
          <SiYoutubemusic className=" mr-4 h-5 w-5" />
          <Link to="/feed/history">
            <h1>YouTube Music</h1>
          </Link>
        </div>
        <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
          <TbBrandYoutubeKids className=" mr-4 h-5 w-5" />
          <Link to="/feed/history">
            <h1>YouTube Kids</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreYoutube;
