import React from "react";
import ButtonList from "./buttonlist";
import Video from "./videocontainer";
const MainComponent = () => {
  return (
    <div className="ml-5">
      <div className="m-2">
        <ButtonList />
      </div>
      <Video />
    </div>
  );
};
export default MainComponent;
