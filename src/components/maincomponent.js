import React from "react";
import ButtonList from "./buttonlist";
import Video from "./videocontainer";
const MainComponent = () => {
  return (
    <div className="ml-2  col-span-11">
      <div className="m-2 ">
        <ButtonList />
      </div>
      <div className="ml-10 ">
        <Video />
      </div>
    </div>
  );
};
export default MainComponent;
