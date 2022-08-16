import React from "react";
import { BsPerson } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
const ProfileBox = () => {
  return (
    <div className="border-2 border-grey shadow-[10px 10px 10px 10px rgba(16, 15, 92, 0.25)] w-[1000px] h-[550px] grid place-items-center place-content-center  shadow-xl rounded-lg grid-flow-row gap-10">
      <img
        src="https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=20&m=1009749608&s=612x612&w=0&h=3bnVp0Y1625uKkSwnp7Uh2_y_prWbgRBH6a_6jRew3g="
        width={150}
        height={150}
        className="min-h-[150px] rounded-full border-2 border-primaryblue"
      />
      <div className="flex flex-col space-y-4">
        <div className="flex rounded-lg border-2 border-grey py-2 pl-4 w-96 items-center space-x-2 text-primaryblue">
          <BsPerson />
          <p>Christopher Paul</p>
        </div>
        <div className="flex rounded-lg border-2 border-grey py-2 w-96 items-center pl-4 space-x-2 text-primaryblue">
          <BsPhone />
          <p>+91 9876543210</p>
        </div>
        <div className="flex rounded-lg border-2 border-grey py-2 w-96 items-center pl-4 space-x-2 text-primaryblue">
          <MdMailOutline />
          <p>zartekindia@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
