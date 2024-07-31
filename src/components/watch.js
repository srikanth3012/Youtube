import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { watchtoggle } from "../utills/Slicers/slideSlicer";

import LiveChart from "./LiveChat";
import { Suggestion_videos } from "../utills/constants";
import { WatchVSearchcard } from "./Cards/videoResultCard";
import { Link } from "react-router-dom";
import { closetoggle } from "../utills/Slicers/BacksideSlidebar";
import MCommentCard from "./comments";
import Videodescriptioncard from "./VideoDiscription/VideoDetails";

const Watch = () => {
  const [livechatv, setlivechatv] = useState(false);
  const dispatcher = useDispatch();
  const closeToggle = () => {
    dispatcher(watchtoggle());
    dispatcher(closetoggle());
  };

  useEffect(() => {
    closeToggle();
    // eslint-disable-next-line
  }, []);

  const [SuggestVideo, setSuggestVideo] = useState([]);

  const [param] = useSearchParams();
  const searchItem = param.get("v");
  console.log(searchItem, "watch");

  useEffect(() => {
    youtubeData();

    // eslint-disable-next-line
  }, []);

  const youtubeData = async () => {
    const SuggestionVideos = await fetch(Suggestion_videos);
    const json = await SuggestionVideos.json();
    setSuggestVideo(json.items);
  };

  return searchItem == "undefined" ? (
    <h1>This Video is Removed From Storage</h1>
  ) : !SuggestVideo ? null : (
    <>
      <div className="h-[610px] xl:h-[550px] 2xl:h-[655px]  grid grid-flow-col">
        <div className="m-5 ml-10 col-span-8">
          <div className="flex ">
            <iframe
              height="500"
              src={
                "https://www.youtube.com/embed/" + searchItem + "?autoplay=1"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl  w-[1000px]"
            ></iframe>
          </div>

          <div className="flex">
            <Videodescriptioncard search={searchItem} />
          </div>

          <div className="mt-6">
            <MCommentCard search={searchItem} />
          </div>
        </div>
        <div className="col-span-4">
          <div>
            <div>
              <button
                className="font-bold text-lg w-40 mt-5 bg-slate-200 rounded-lg"
                onClick={() => {
                  !livechatv ? setlivechatv(true) : setlivechatv(false);
                }}
              >
                LiveChatBox
              </button>
            </div>
            {!livechatv ? "" : <LiveChart />}
          </div>

          <div className=" flex-col">
            {SuggestVideo.map((item, i) => (
              <li
                key={item.id + i}
                className=" list-none hover:border border-white "
              >
                <Link to={"/watch?v=" + item?.id?.videoId}>
                  <WatchVSearchcard info={item} />
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Watch;
