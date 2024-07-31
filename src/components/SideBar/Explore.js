import React from "react";
import { CiStreamOn } from "react-icons/ci";
import {
  MdOutlineShoppingBag,
  MdOutlineMusicNote,
  MdOutlineLocalMovies,
  MdOutlinePodcasts,
} from "react-icons/md";
import { AiOutlineFire, AiOutlineTrophy, AiOutlineBulb } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";
import { TbHanger2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="shadow-sm">
      <h1 className="pl-2 text-lg py-2"> Explore</h1>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <AiOutlineFire className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Trending</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <MdOutlineShoppingBag className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Shopping</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <MdOutlineMusicNote className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Music</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <MdOutlineLocalMovies className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Movies</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <CiStreamOn className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Live</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <SiYoutubegaming className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Gaming</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <BsNewspaper className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>News</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <AiOutlineTrophy className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Sports</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <AiOutlineBulb className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Learning</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <TbHanger2 className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Fashion & Beauty</h1>
        </Link>
      </div>
      <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
        <MdOutlinePodcasts className=" mr-4 h-5 w-5" />
        <Link to="/feed/history">
          <h1>Podcast</h1>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
