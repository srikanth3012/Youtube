import React from "react";
const Vcard = ({ info }) => {
  return (
    <>
      {/* min-w-[40px] max-w-[395px] min-h-[300px] max-h-96 */}
      <div className="m-2 mb-3 w-72  h-80  rounded-md  hover:scale-105 hover:duration-200 hover:shadow-lg   ">
        <img
          className="rounded-lg w-96 h-52 object-cover "
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
