import React, { useCallback, useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { FiPlayCircle } from "react-icons/fi";
import { BsCollectionPlay } from "react-icons/bs";
import { Link } from "react-router-dom";
import SidebarCard from "../Cards/SideBarCard";
import SideBarCard from "../Cards/SideBarCard";

const HomeButtons = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Memoize the handleClick function
  const handleClick = useCallback((item) => {
    setSelectedItem(item);
  }, []);
  const items = [
    { Name: "Home", icon: <MdHomeFilled /> },
    { Name: "Shorts", icon: <FiPlayCircle /> },
    { Name: "Subscriptions", icon: <BsCollectionPlay /> },
  ];
  return (
    // <div>
    //   <div className="shadow-sm">
    //     <div className="p-2  flex items-center hover:bg-gray-100 rounded-lg">
    //       <MdHomeFilled className=" mr-4 h-6 w-6" />
    //       <Link to="/">
    //         <h1>Home</h1>
    //       </Link>
    //     </div>
    //     <div className="p-2 flex items-center hover:bg-gray-100 rounded-lg">
    //       <FiPlayCircle className=" mr-4 h-5 w-5" />
    //       <Link to="/">
    //         <h1>Shorts</h1>
    //       </Link>
    //     </div>
    //     <div className="p-2 flex flex-col ">
    //       <div className="flex items-center hover:bg-gray-100 rounded-lg">
    //         <BsCollectionPlay className=" mr-4 h-5 w-5" />
    //         <Link to="/">
    //           <h1>Subscriptions</h1>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="sidebar">
      {items.map((item) => (
        <SideBarCard
          key={item?.Name}
          item={item}
          onClick={handleClick}
          isSelected={item === selectedItem}
        />
      ))}
    </div>
  );
};

export default HomeButtons;
