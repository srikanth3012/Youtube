import React from "react";

import SlideBar from "./Slidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <div className="grid grid-flow-col p-3">
        <div className="flex flex-col">
          <Header />
          <div className="flex">
            <div>
              <SlideBar />
            </div>
            <Outlet />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Body;
