import React from "react";
import { FcBusinessman } from "react-icons/fc";
const SubScription = () => {
  return (
    <div className="shadow-sm">
      <h1 className="text-lg py-2 pl-2">Subscriptions</h1>
      <div className="flex flex-col gap-0.5 mt-2 ">
        <div className="flex hover:bg-gray-100 rounded-lg py-2">
          <FcBusinessman className=" mx-1 mr-7 " size={20} />
          <h1>Akshay Saini</h1>
        </div>
        <div className="flex hover:bg-gray-100 rounded-lg py-2">
          <FcBusinessman className=" mx-1 mr-7" size={20} />
          <h1>Anurag Singh</h1>
        </div>
        <div className="flex hover:bg-gray-100 rounded-lg py-2">
          <FcBusinessman className=" mx-1 mr-7" size={20} />
          <h1>Tamada</h1>
        </div>
        <div className="flex hover:bg-gray-100 rounded-lg py-2">
          <FcBusinessman className=" mx-1 mr-7" size={20} />
          <h1>Time Of India</h1>
        </div>
      </div>
    </div>
  );
};

export default SubScription;
