import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NormalSideBarLohos from "./NormalSideBarLohos";
import SlideBar from "./Slidebar";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { toggleMenu } from "../../utills/Slicers/slideSlicer";

const SideBarBody = ({ position }) => {
  const dispatcher = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isToogle = useSelector((store) => store.BackSide.istoggleOpen);
  const isMenuOpenHandler = () => {
    dispatcher(toggleMenu());
  };

  return !isMenuOpen ? (
    <div
      className={`duration-500 ease-linear  ${
        !isToogle ? `left-[-100]` : `left-0`
      }`}
    >
      {isToogle && <NormalSideBarLohos />}
    </div>
  ) : (
    <>
      <div className={`${position} -ml-3 `}>
        {position && (
          <div className="col-span-1  flex ml-1  items-center mb-6">
            <HiBars3
              className="h-10 cursor-pointer w-6 "
              onClick={() => {
                isMenuOpenHandler();
              }}
            />

            <Link to="/">
              <img
                className="h-12 mx-2 ml-3"
                alt="youtube"
                src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
              />
            </Link>
          </div>
        )}
        <SlideBar />
      </div>
    </>
  );
};

export default SideBarBody;
