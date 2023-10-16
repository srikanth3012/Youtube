import { BiSolidDownload } from "react-icons/bi";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { HiOutlineMinus } from "react-icons/hi2";
import { RiShareForwardLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { historymessages } from "./historySlicer";
import { useState } from "react";

const VSearchcard = ({ info }) => {
  return (
    <>
      <div className="  flex m-2 w-full rounded-md h-52 shadow-lg ">
        <img
          className="m-2 w-80 h-48 rounded-lg"
          alt="logo "
          src={info.snippet.thumbnails.medium.url}
        />
        <div className="pt-10">
          <ul className="list-none">
            <li className="font-bold text-sm pl-2 pr-2">
              {info.snippet.title}
            </li>
            <li className="font-semibold text-xs pl-2">
              {info.snippet.channelTitle}
            </li>

            <li className=" text-xs pl-2">{info.statistics.viewCount}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export const WatchVSearchcard = ({ info }) => {
  return (
    <>
      <div className="flex mt-4 w-full pr-20 rounded-md h-24 ">
        <img
          className=" w-40 h-24 rounded-lg"
          alt="logo "
          src={info.snippet.thumbnails.medium.url}
        />
        <div className="">
          <ul className="list-none">
            <li className="font-bold text-xs pl-1 ">{info.snippet.title}</li>
            <li className=" font-semibold text-xs pl-2">
              {info.snippet.channelTitle}
            </li>

            <li className=" text-xs pl-2">{info.statistics.viewCount}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export const Channeldescriptioncard = ({ search, list }) => {
  const dispatcher = useDispatch();
  const [more, setMore] = useState(false);

  list.map((item) => {
    if (item.id === search) {
      dispatcher(historymessages(item));
      // setsearchItem(null);
    } else {
    }
  });
  console.log(list);

  return (
    <>
      <div>
        {list.map((item) => {
          return item.id === search ? (
            <>
              <div className=" items-center">
                <div className="items-center">
                  <h1 className="font-bold text-xl m-2">
                    {item.snippet.title}
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
                        {item.snippet.channelTitle}
                      </h1>
                      <h3 className=" text-xs ">
                        {item.statistics.viewCount / 100}
                        <span className="pl-1">Subscribers</span>
                      </h3>
                    </div>
                    <div>
                      <h2 className=" text-lg pl-4 w-28 py-1.5 h-10 rounded-full bg-gray-900 text-white font-serif m-2">
                        Subscribe
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center ">
                    <div className=" pl-1 pt-1  flex bg-slate-200 rounded-l-3xl  h-8 text-sm">
                      <AiOutlineLike className="w-10 h-6 pl-3" />
                      <h1 className="py-0.5 pr-2">
                        {item.statistics.likeCount}
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
                  </div>
                </div>
              </div>
              <div>
                {!more ? (
                  <div className="m-1 w-[900px] pr-20 bg-slate-100 rounded-md  shadow-lg">
                    <div className="h-16 overflow-hidden ">
                      <h1 className=" text-sm p-2 whitespace-pre-line ">
                        {item.snippet.description}
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
                  <div className="m-1  w-[900px] pr-20 bg-slate-100 rounded-md shadow-lg">
                    <h1 className=" text-sm p-2 whitespace-pre-line ">
                      {item.snippet.description}
                    </h1>
                    <h1 className="font-semibold text-xs p-2 flex-col list-none">
                      {item.snippet.tags.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
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
            </>
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
};
export default VSearchcard;
