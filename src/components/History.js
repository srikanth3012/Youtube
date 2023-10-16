import { useDispatch, useSelector } from "react-redux";
import VSearchcard from "../utills/videoResultCard";

function MyComponent({ items }) {
  // Use a Set to store unique items
  const uniqueItems = new Set(items);

  // Convert the Set back to an array
  const uniqueItemsArray = Array.from(uniqueItems);
  console.log(uniqueItemsArray);

  return (
    <div className="">
      {uniqueItemsArray.map((item) => (
        <li key={item.id} className=" list-none hover:border border-white ">
          <VSearchcard info={item} />
        </li>
      ))}
    </div>
  );
}
const History = () => {
  console.log("Histroy");

  const select = useSelector((store) => store.history.HistoryList);
  const uniqueItems = new Set(select);

  // Convert the Set back to an array
  const uniqueItemsArray = Array.from(uniqueItems);
  return (
    <div className="">
      {uniqueItemsArray.map((item) => (
        <li key={item.id} className=" list-none hover:border border-white ">
          <VSearchcard info={item} />
        </li>
      ))}
    </div>
  );
};
export default History;
