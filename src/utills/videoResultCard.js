import { CgProfile } from "react-icons/cg";
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
      <div className="flex mt-4 max-w-md pr-20 rounded-md h-24 hover:scale-105 hover:duration-200 hover:shadow-lg ">
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

            {/* <li className=" text-xs pl-2">{info.statistics.viewCount}</li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default VSearchcard;
