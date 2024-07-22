import { BiSolidDownload, BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineDislike, AiOutlineLike, AiOutlineFlag } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { historymessages } from "../utills/historySlicer";
import { useEffect, useState } from "react";
import { Histriy_video_api, video_info } from "../utills/constants";
import { WatchLater } from "../utills/watchlaterslicer";

export const Videodescriptioncard = ({ search }) => {
  const dispatcher = useDispatch();
  const [more, setMore] = useState(false);
  const [videoListInfo, setVideoListInfo] = useState("");
  const [box, setBox] = useState(true);
  const [videoId_data, setvideoId_data] = useState("");
  useEffect(() => {
    youtubeData();
    // eslint-disable-next-line
  }, [search]);
  useEffect(() => {
    const title = document.getElementById("mainTitle");
    console.log(title, "testing");
    title.innerText = videoListInfo?.snippet?.title;
  }, [videoListInfo]);

  const youtubeData = async () => {
    const data = await fetch(video_info + `&id=${search}`);

    const json = await data.json();
    setVideoListInfo(json?.items[0]);
  };
  function watchlaterslicer(videoId_data) {
    dispatcher(WatchLater(videoId_data));
  }
  useEffect(() => {
    History_page();
    // eslint-disable-next-line
  }, [search]);
  const History_page = async () => {
    const video_data = await fetch(Histriy_video_api + `&id=${search}`);
    const json2 = await video_data.json();
    setvideoId_data(json2?.items[0]);
    dispatcher(historymessages(json2?.items[0]));
  };

  return !videoListInfo ? null : (
    <>
      <div className="flex flex-col ">
        <div className=" items-center">
          <div className="items-center">
            <h1 className="font-bold text-xl m-2">
              {videoListInfo?.snippet?.title}
            </h1>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center ">
              <img
                className="m-2.5 w-10 h-10 rounded-lg "
                alt="logo "
                src="https://tse2.mm.bing.net/th?id=OIP.OxMQNMLB1Ze7po7bAjacNAHaHa&pid=Api&P=0&h=180"
              />
              <div className="">
                <h1 className="font-semibold text-base w-max">
                  {videoListInfo?.snippet?.channelTitle}
                </h1>
                <h3 className=" text-xs ">
                  {videoListInfo?.statistics?.viewCount / 100}
                  <span className="pl-1 font-gabarito ">Subscribers</span>
                </h3>
              </div>
              <div>
                <h2 className=" text-lg pl-5 w-28 py-1.5 h-10 rounded-full bg-gray-900 text-white font- m-2">
                  Subscribe
                </h2>
              </div>
            </div>

            <div className="flex items-center ">
              <div className=" pl-1 pt-1  flex bg-slate-200 rounded-l-3xl  h-8 text-sm">
                <AiOutlineLike className="w-10 h-6 pl-3" />
                <h1 className="py-0.5 pr-2">
                  {videoListInfo?.statistics?.likeCount}
                </h1>
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
                    !box ? setBox(true) : setBox(false);
                  }}
                />
              </div>
              {!box ? (
                <div className=" absolute z-10 top-70 mt-30  ">
                  <div className="m-2  bg-gray-200 w-32 p-5 h-auto  rounded-2xl flex  flex-col gap-2">
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
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

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
      </div>
    </>
  );
};
export default Videodescriptioncard;
