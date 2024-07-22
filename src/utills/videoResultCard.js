import { CgProfile } from "react-icons/cg";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
const VSearchcard = ({ info }) => {
  return (
    <>
      <div className="  flex m-2 w-full rounded-md h-44 hover:scale-105 hover:duration-200 hover:shadow-lg  ">
        <img
          className="m-2 w-72 h-40 rounded-lg"
          alt="logo "
          src={info.snippet.thumbnails.medium.url}
        />
        <div className="pt-4">
          <ul className="list-none">
            <li className="font-semibold text-lg pl-2 pr-2">
              {info.snippet.title}
            </li>
            <li className=" pl-2 mt-2 flex">
              <CgProfile size={25} />
              <span className="font-semibold text-sm ml-1 mt-0.5">
                {info.snippet.channelTitle}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export const HSearchcard = ({ info }) => {
  return (
    <>
      <div className="  flex m-2 w-full rounded-md h-52  hover:scale-105 hover:duration-200 hover:shadow-lg ">
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
          </ul>
        </div>
      </div>
    </>
  );
};
export const WatchVSearchcard = ({ info }) => {
  return (
    <>
      <div className="flex mt-4 max-w-md pr-20  h-24 overflow-hidden  justify-around">
        <img
          className=" w-40 h-24 rounded-xl hover:rounded-none  hover:duration-200"
          alt="logo "
          src={info.snippet.thumbnails.medium.url}
        />
        <div className="mt-1">
          <ul className="list-none pl-2">
            <li className="font-bold w-40 text-xs overflow-hidden ">
              {info.snippet.title}
            </li>
            <li className=" text-xs text-gray-500">
              {info.snippet.channelTitle}
            </li>

            <li className=" text-xs  ">{info?.statistics?.viewCount}</li>
            <li className=" text-xs text-gray-500">
              29M views <span>.</span>1 month ago
            </li>
          </ul>
        </div>
        <IoEllipsisVerticalSharp className=" w-8 h-5 mt-2 " />
      </div>
    </>
  );
};

export default VSearchcard;
