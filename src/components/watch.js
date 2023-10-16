import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { watchtoggle } from "../utills/slideSlicer";

import LiveChart from "./LiveChat";
import { Youtubedata } from "../utills/constants";
import {
  Channeldescriptioncard,
  WatchVSearchcard,
} from "../utills/videoResultCard";
import { Link } from "react-router-dom";
import { closetoggle } from "../utills/BacksideSlidebar";
import MCommentCard from "./maincomment";

const Watch = () => {
  const [searchParam] = useSearchParams();
  const [livechatv, setlivechatv] = useState(false);
  const dispatcher = useDispatch();
  const closeToggle = () => {
    dispatcher(watchtoggle());
    dispatcher(closetoggle());
  };

  useEffect(() => {
    closeToggle();
  }, []);

  const [Video, setVideo] = useState([]);

  const [param] = useSearchParams();
  const searchItem = param.get("v");

  useEffect(() => {
    youtubeData();

    // eslint-disable-next-line
  }, []);

  const youtubeData = async () => {
    const data = await fetch(Youtubedata);
    const json = await data.json();
    setVideo(json.items);
  };

  return !Video ? (
    ""
  ) : (
    <>
      <div className="h-[610px] w-auto overflow-y-scroll flex ">
        <div className="m-5 ml-32">
          <div className="flex">
            <iframe
              width="900"
              height="500"
              src={
                "https://www.youtube.com/embed/" +
                searchParam.get("v") +
                "?autoplay=1"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>

          <div className="flex">
            <Channeldescriptioncard search={searchItem} list={Video} />
          </div>

          <div>
            <div>
              <h1 className="text-lg ">Comments:</h1>
              <MCommentCard videoKey={searchItem} />
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <div>
              <div className="">
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
            </div>
            <div>
              <div className=" flex-col">
                {Video.map((item) => (
                  <li
                    key={item.id}
                    className=" list-none hover:border border-white "
                  >
                    <Link to={"/watch?v=" + item.id}>
                      <WatchVSearchcard info={item} />
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Watch;
