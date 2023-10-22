import React, { useEffect, useState } from "react";
import { Youtubedata } from "../utills/constants";
import Vcard, { Vcard2 } from "../utills/videocard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { opentoggle } from "../utills/BacksideSlidebar";

const Video = () => {
  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();
  dispatch(opentoggle());
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    youtubeData();
  }, []);

  const youtubeData = async () => {
    const data = await fetch(Youtubedata);
    const json = await data.json();
    setVideo(json.items);
  };

  return !video ? null : (
    <>
      {/* */}
      <div className="flex flex-wrap overflow-y-scroll  h-[580px] md:h-[340px] lg:h-[420px] xl:h-[490px] 2xl:h-[590px] no-scrollbar ">
        {!isMenuOpen
          ? video.map((item) => (
              <li
                key={item.id}
                className="list-none hover:scale-105 rounded-lg "
              >
                <Link to={"/watch?v=" + item.id}>
                  <Vcard2 info={item} />
                </Link>
              </li>
            ))
          : video.map((item) => (
              <li
                key={item.id}
                className="list-none hover:scale-105 rounded-lg "
              >
                <Link to={"/watch?v=" + item.id}>
                  <Vcard info={item} />
                </Link>
              </li>
            ))}
      </div>
    </>
  );
};
export default Video;
