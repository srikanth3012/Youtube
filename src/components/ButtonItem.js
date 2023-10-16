import React from "react";
const ButtonItem = ({ name }) => {
  return (
    <button className="hover:border border-gray-400 font-semibold m-1 w-24 bg-gray-200 rounded-md ">
      {name}
    </button>
  );
};
export default ButtonItem;
