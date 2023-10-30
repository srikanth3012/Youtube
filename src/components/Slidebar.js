import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineShoppingBag,
  MdOutlineMusicNote,
  MdOutlineLocalMovies,
  MdOutlinePodcasts,
  MdOutlineSettings,
  MdOutlineFeedback,
} from "react-icons/md";
import { FiPlayCircle } from "react-icons/fi";
import {
  BsCollectionPlay,
  BsFilePlay,
  BsClock,
  BsNewspaper,
} from "react-icons/bs";
import {
  AiOutlineLike,
  AiOutlineFire,
  AiOutlineTrophy,
  AiOutlineBulb,
  AiFillYoutube,
  AiOutlineFlag,
} from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";
import {
  SiYoutubegaming,
  SiYoutubestudio,
  SiYoutubemusic,
} from "react-icons/si";
import { TbHanger2, TbBrandYoutubeKids, TbHelp } from "react-icons/tb";
const SlideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isToogle = useSelector((store) => store.BackSide.istoggleOpen);

  return !isMenuOpen ? (
    <>
      <div
        className={`duration-500 ease-linear ${
          !isToogle ? `left-[-100]` : `left-0`
        }`}
      >
        {!isToogle ? null : (
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
        )}
      </div>
    </>
  ) : (
    <>
      <div className=" w-48 h-screen bg-white shadow-2xl shadow-r-xl rounded-md   overflow-y-scroll  scrollbar-thumb-slate-500 scrollbar-thin scrollbar-rounded-xl ">
        <div className="pl-3.5 pr-2 ">
          <div className="shadow-sm">
            <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
              <MdHomeFilled className=" mr-4 h-6 w-6" />
              <Link to="/">
                <h1>Home</h1>
              </Link>
            </div>
            <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
              <FiPlayCircle className=" mr-4 h-5 w-5" />
              <Link to="/">
                <h1>Shorts</h1>
              </Link>
            </div>
            <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
              <BsCollectionPlay className=" mr-4 h-5 w-5" />
              <Link to="/">
                <h1>Subscriptions</h1>
              </Link>
            </div>
          </div>
          <div className="shadow-sm">
            <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
              <MdOutlineVideoLibrary className=" mr-4 h-5 w-5" />
              <Link to="/">
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
          <div className="shadow-sm">
            <h1 className="text-lg py-2 pl-2">Subscriptions</h1>
          </div>

          {/*Explore */}
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

          {/* More from YouTube */}
          <h1 className="pl-0.5 text-lg py-2">More from YouTube</h1>
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
