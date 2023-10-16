import React from "react";
import { CgProfile } from "react-icons/cg";
const Profile = () => {
  return (
    <>
      <div className=" pl-[110px] place-content-evenly">
        <CgProfile className="h-10 w-10 ml-6 mt-5" />
        <button className="rounded-lg m-1 bg-black text-white w-20 h-8">
          Sign Up
        </button>
      </div>
      <div className="pl-24 mt-2">
        <h1>Language:English</h1>
        <h1 className="pl-3 mt-1">Location:India</h1>
        <h1 className="pl-6 mt-1">Settings</h1>
        <h1 className="pl-8 mt-1">Help</h1>
        <h1 className="pl-2 mt-1">Send Feedback</h1>
      </div>
    </>
  );
};
export default Profile;
