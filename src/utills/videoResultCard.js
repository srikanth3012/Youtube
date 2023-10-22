const VSearchcard = ({ info }) => {
  return (
    <>
      <div className="  flex m-2 w-full rounded-md h-52  shadow-lg ">
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
export const HSearchcard = ({ info }) => {
  return (
    <>
      <div className="  flex m-2 w-full rounded-md h-52  shadow-lg ">
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
      <div className="2xl:flex mt-4 w-full pr-20 rounded-md h-24 xl:h-[160px] 2xl:h-[96px] ">
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
