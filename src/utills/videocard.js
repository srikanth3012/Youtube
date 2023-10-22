import React from "react";
const Vcard = ({ info }) => {
  return (
    <>
      <div className="m-2 mb-8 w-96 md:w-40 lg:w-[270px] xl:w-[340px] 2xl:w-96 rounded-md h-80 md:h-[500px] lg:h-[400px] xl:h-80 shadow-lg">
        <img
          className="rounded-lg w-96 h-52  "
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
      <div className="m-2 mb-8 w-80 rounded-md h-80 shadow-lg">
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
