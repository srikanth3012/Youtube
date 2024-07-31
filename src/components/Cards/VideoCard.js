import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const Vcard = ({ info }) => {
  return (
    <>
      {/* min-w-[40px] max-w-[395px] min-h-[300px] max-h-96 */}
      <div className="m-2 mb-3 w-72  h-64  rounded-md ">
        <img
          className="rounded-xl hover:rounded-none hover:duration-200 w-96 h-40  object-cover "
          alt="logo "
          src={info.snippet.thumbnails.medium.url}
        />
        <div className=" grid grid-flow-col pt-3">
          <FcBusinessman className="grid-cols-3 w-8 h-10" />
          <ul className="list-none  grid-cols-6 flex flex-col text-left">
            <li className="font-semibold w-52 text-sm h-10 overflow-hidden pl-1 ">
              {info.snippet.title}
            </li>

            <li className="text-gray-500 text-sm pl-2">
              {info.snippet.channelTitle}
            </li>
            <li className="flex text-gray-500 text-sm pl-2">
              2.9M views{" "}
              <span>
                <GoDotFill className="py-1 h-6 mx-1" size={7} />
              </span>
              2 months ago
            </li>
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
      <div className="m-2 mb-8 w-80 rounded-md h-[260px] ">
        <img
          className="rounded-xl h-40 w-72 hover:rounded-none"
          alt="logo "
          src={info.snippet.thumbnails.medium.url}
        />
        <div className=" grid grid-flow-col pt-3">
          <FcBusinessman className="grid-cols-3 w-8 h-14 py-1" />
          <ul className="list-none  grid-cols-6">
            <li className="font-semibold w-52 h-12 overflow-hidden pl-2 pr-2">
              {info.snippet.title}...
            </li>

            <li className="text-gray-500 text-sm  pl-2">
              {info.snippet.channelTitle}
            </li>
            <li className="flex text-gray-500 text-sm pl-2">
              2.9M views{" "}
              <span>
                <GoDotFill className="py-1 h-6 mx-1" size={7} />
              </span>
              2 months ago
            </li>
          </ul>
          <IoEllipsisVerticalSharp className="grid-cols-3 w-8 h-5 mt-2" />
        </div>
      </div>
    </>
  );
};
export default Vcard;
