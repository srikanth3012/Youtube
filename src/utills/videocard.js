import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const Vcard = ({ info }) => {
  return (
    <>
      {/* min-w-[40px] max-w-[395px] min-h-[300px] max-h-96 */}
      <div className="m-2 mb-3 w-72  h-72  rounded-md    ">
        <img
          className="rounded-xl hover:rounded-none hover:duration-200 w-96 h-40 object-cover "
          alt="logo "
          src={info.snippet.thumbnails.medium.url}
        />
        <div className=" grid grid-flow-col pt-3">
          <FcBusinessman className="grid-cols-3 w-8 h-8 " />
          <ul className="list-none  grid-cols-6">
            <li className="font-semibold w-52 h-12 overflow-hidden pl-2 pr-2">
              {info.snippet.title}...
            </li>

            <li className="text-gray-500  pl-2">{info.snippet.channelTitle}</li>
            <li className="text-gray-500  pl-2">{info.statistics.viewCount}</li>
          </ul>
          <IoEllipsisVerticalSharp className="grid-cols-3 w-8 h-5 mt-2" />
        </div>
      </div>
    </>
  );
};
export const Vcard2 = ({ info }) => {
  return (
    <>
      <div className="m-2 mb-8 w-64 rounded-md h-[330px] shadow-lg hover:scale-105 hover:duration-200 hover:shadow-lg">
        <img
          className="rounded-lg h-52  "
          alt="logo "
          src={info.snippet.thumbnails.medium.url}
        />
        <ul className="list-none">
          <li className="font-bold text-sm pl-2 pr-2">{info.snippet.title}</li>
          <li className="font-semibold text-xs pl-2">
            {info.snippet.channelTitle}
          </li>
          <li className=" text-xs pl-2">{info.statistics.viewCount}</li>
        </ul>
      </div>
    </>
  );
};
export default Vcard;
