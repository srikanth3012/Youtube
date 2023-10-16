import { useDispatch, useSelector } from "react-redux";
import { appmessages } from "../utills/LiveChatSlicer";
import { useEffect, useState } from "react";
import LiveChatCard from "../utills/livechatcard";
import generate, { liveMessageGenerate } from "../utills/helper";

const LiveChart = () => {
  const [liveInput, setliveInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        appmessages({ name: generate(), message: liveMessageGenerate(20) })
      );
    }, 2000);
    return () => clearInterval(i);
  });
  const selector = useSelector((store) => store.live.Messages);

  return (
    <>
      <div className="flex bg-slate-100 w-96 border border-black flex-col-reverse rounded-lg h-[500px] overflow-y-scroll">
        {selector.map((c, i) => (
          <LiveChatCard key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div>
        <form
          className=" border border-gray-950 w-96 rounded-lg bg-slate-200"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              appmessages({
                name: "Srikanth",
                message: liveInput,
              })
            );
            setliveInput("");
          }}
        >
          <input
            type="text"
            className="border border-slate-900 ml-3 w-64 rounded-md"
            value={liveInput}
            onChange={(e) => {
              setliveInput(e.target.value);
            }}
          />
          <button className="bg-green-500 rounded-lg m-2 text-white w-12">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
export default LiveChart;
