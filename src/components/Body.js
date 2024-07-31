import React, { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Header from "./Header/Header";
import SideBarBody from "./SideBar/SideBarBody";
import { useSelector } from "react-redux";

const Body = () => {
  const [position, setPosition] = useState("");
  const [param] = useSearchParams();
  const searchItem = param.get("v");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    if (searchItem) setPosition("fixed bg-white z-10 h-screen top-0 py-6 ");
    else setPosition("");
  }, [searchItem]);
  return (
    <>
      {isMenuOpen && searchItem && (
        <div className="w-screen h-screen bg-black opacity-30 fixed  "></div>
      )}
      <div className="grid grid-flow-col p-3">
        <div className="flex flex-col">
          <Header />
          <div className="flex">
            <div>
              <SideBarBody position={position} />
            </div>
            <Outlet />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Body;
