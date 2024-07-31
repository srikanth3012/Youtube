import React from "react";
import { Link } from "react-router-dom";

// Use React.memo to prevent unnecessary re-renders
const SideBarCard = React.memo(({ item, onClick, isSelected }) => {
  const { Name, icon } = item;

  return (
    <div
      className={`p-2  flex items-center hover:bg-gray-100 rounded-lg ${
        isSelected ? "selected" : ""
      }`}
      onClick={() => onClick(item)}
    >
      {/* <MdHomeFilled  /> */}
      <span className="mr-3">{icon}</span>
      <Link to="/">
        <h1>{Name}</h1>
      </Link>
    </div>
  );
});

export default SideBarCard;
