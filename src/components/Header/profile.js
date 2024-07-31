import React from "react";
import { CgProfile } from "react-icons/cg";
const Profile = () => {
  return (
    <>
      <div className="pl-[65px]">
        <div className=" pl-[10px] mt-20 place-content-evenly">
          <CgProfile className="h-10 w-10 ml-6 mt-5" />
          <button className="rounded-lg m-1 bg-black text-white w-20 h-8">
            Sign Up
          </button>
        </div>
        <div className="pl- mt-2">
          <h1>Language:English</h1>
          <h1 className="pl-2 mt-1">Location:India</h1>
          <h1 className="pl-4 mt-1">Settings</h1>
          <h1 className="pl-8  mt-1">Help</h1>
          <h1 className="pl-1 mt-1">Send Feedback</h1>
        </div>
      </div>
    </>
  );
};
export default Profile;
