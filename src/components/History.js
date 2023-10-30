import { useSelector } from "react-redux";
import { HSearchcard } from "../utills/videoResultCard";
import { Link } from "react-router-dom";

const History = () => {
  const select = useSelector((store) => store.history.HistoryList);
  const uniqueItems = new Set(select);
  const uniqueItemsArray = Array.from(uniqueItems);
  return !uniqueItemsArray ? (
    <div>
      <h1>No Results</h1>
    </div>
  ) : (
    <div className="">
      {uniqueItemsArray.map((item) => (
        <Link to={"/watch?v=" + item.id}>
          <li key={item.id} className=" list-none grid grid-cols-11 h-screen ">
            <HSearchcard info={item} />
          </li>
        </Link>
      ))}
    </div>
  );
};
export default History;
