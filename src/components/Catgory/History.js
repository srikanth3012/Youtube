import { useSelector } from "react-redux";
import { HSearchcard } from "../Cards/videoResultCard";

import CatgorySideCard from "../Cards/CatgorySideCard";

const History = () => {
  const select = useSelector((store) => store.history.HistoryList);
  const uniqueItems = new Set(select);
  const uniqueItemsArray = Array.from(uniqueItems);

  return select.length === 0 ? (
    <div className="flex  justify-items-center">
      <h1 className="text-black text-3xl ">No Results</h1>
    </div>
  ) : (
    <>
      <div className="w-[25%] ">
        {" "}
        <CatgorySideCard video={select[0]} VideosLength={select.length} />
      </div>
      <div>
        {select.map((videoListInfo) => (
          <li key={videoListInfo.id} className=" list-none">
            <HSearchcard info={videoListInfo} />
          </li>
        ))}
      </div>
    </>
  );
};
export default History;
