import React, { useEffect, useState } from "react";
import { Youtubedata } from "../utills/constants";
import Vcard, { Vcard2 } from "./Cards/VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { opentoggle } from "../utills/Slicers/BacksideSlidebar";

const Video = () => {
  const [video, setVideo] = useState([]);
  const [page, setPage] = useState("");
  const dispatch = useDispatch();
  dispatch(opentoggle());
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    youtubeData();
    const title = document.getElementById("mainTitle");

    title.innerText = "Srikanth_Youtube";
  }, []);

  const youtubeData = async () => {
    try {
      const url =
        page !== "" ? `${Youtubedata}&pageToken=${page}` : Youtubedata;
      const data = await fetch(url);
      const json = await data.json();

      setPage(json.nextPageToken);
      setVideo([...video, ...json.items]);
    } catch (e) {
      console.log(e);
    }
  };
  const handelScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      youtubeData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll, true);
    return () => {
      window.removeEventListener("scroll", handelScroll, true);
    };
  }, [page]);

  return !video ? null : (
    <>
      <div className="flex flex-wrap overflow-y-scroll h-[36em]  no-scrollbar">
        {!isMenuOpen
          ? video.map((item) => (
              <li key={item.id} className="list-none  rounded-lg ">
                <Link to={"/watch?v=" + item.id}>
                  <Vcard2 info={item} />
                </Link>
              </li>
            ))
          : video.map((item) => (
              <li key={item.id} className="list-none  rounded-lg ">
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
