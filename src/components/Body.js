import React from "react";

import SlideBar from "./Slidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className="flex ">
          <div>
            <SlideBar />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
