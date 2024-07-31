import { useDispatch } from "react-redux";
import { historymessages } from "../../utills/Slicers/historySlicer";
import { useEffect, useState } from "react";
import { Histriy_video_api, video_info } from "../../utills/constants";
import PopUpBox from "./PopUpBox";
import VideoDescription from "./VideoDescription";
import LikeShareDownloadButtons from "./LikeShareDownloadButtons";

export const VideoDetails = ({ search }) => {
  const dispatcher = useDispatch();

  const [videoListInfo, setVideoListInfo] = useState("");
  const [box, setBox] = useState(true);
  const [videoId_data, setvideoId_data] = useState("");
  useEffect(() => {
    youtubeData();
    // eslint-disable-next-line
  }, [search]);
  useEffect(() => {
    if (videoListInfo) {
      const title = document.getElementById("mainTitle");

      title.innerText = videoListInfo?.snippet?.title;
    }
  }, [videoListInfo]);

  const youtubeData = async () => {
    const data = await fetch(video_info + `&id=${search}`);

    const json = await data.json();
    setVideoListInfo(json?.items[0]);
  };

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

            <div className=" ">
              <LikeShareDownloadButtons
                videoListInfo={videoListInfo}
                setBox={setBox}
              />
              {!box ? <PopUpBox videoId_data={videoId_data} /> : ""}
            </div>
          </div>
        </div>

        <div>
          <VideoDescription videoListInfo={videoListInfo} />
        </div>
      </div>
    </>
  );
};
export default VideoDetails;
