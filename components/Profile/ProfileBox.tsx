import React from "react";
import { BsPerson } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
const ProfileBox = () => {
  return (
    <div className="border-2 border-grey shadow-profile w-[1000px] h-[480px] grid place-items-center place-content-center   rounded-lg grid-flow-row gap-10">
      <img
        src="https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=20&m=1009749608&s=612x612&w=0&h=3bnVp0Y1625uKkSwnp7Uh2_y_prWbgRBH6a_6jRew3g="
        width={150}
        height={150}
        className="min-h-[150px] rounded-full border-2 border-primaryblue border-opacity-80"
      />
      <div className="flex flex-col space-y-4">
        <div className="flex rounded-lg border-2 border-grey py-3 pl-4 w-96 items-center gap-2 text-primaryblue lg:w-auto">
          <BsPerson className="w-4 h-4"/>
          <p>Christopher Paul</p>
        </div>
        <div className="flex rounded-lg border-2 border-grey py-3 w-96 items-center pl-4 gap-2 text-primaryblue lg:w-auto">
          <BsPhone className="w-4 h-4"/>
          <p>+91 9876543210</p>
        </div>
        <div className="flex rounded-lg border-2 border-grey py-3 w-96 items-center  pl-4 gap-2 text-primaryblue lg:w-auto">
          <MdMailOutline className="mt-1 w-4 h-4"/>
          <p>zartekindia@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
