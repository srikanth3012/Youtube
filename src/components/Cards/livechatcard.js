import React from "react";
const LiveChatCard = ({ name, message }) => {
  return (
    <>
      <div className="flex mt-4 ml-2">
        <div>
          <img
            className="h-6 rounded-full"
            alt="profile"
            src="https://tse2.mm.bing.net/th?id=OIP.OxMQNMLB1Ze7po7bAjacNAHaHa&pid=Api&P=0&h=180"
          />
        </div>
        <p className="px-2 font-semibold"> {name}</p>
        <p>{message}</p>
      </div>
    </>
  );
};
export default LiveChatCard;
