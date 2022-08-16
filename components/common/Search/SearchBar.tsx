import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
  const [iconstyle, seticonstyle] = React.useState("border-grey");
  const changeBorderColor = () => {
    if (iconstyle == "border-grey") {
      seticonstyle("border-primaryblue   border-2 scale-[101%]");
    } else {
      seticonstyle("border-grey");
    }
  };
  return (
    <div
      className={`border-2 rounded-[50px] ${iconstyle}  p-2  w-[600px] md:w-auto flex items-center cursor-pointer mx-2 warehousecard:max-w-[450px]`}
    >
      <input
        type="text"
        className="focus:outline-none rounded-r-lg text-primaryblue placeholder:text-primaryblue placeholder:opacity-50 w-full px-3 h-full"
        onFocus={changeBorderColor}
        onBlur={changeBorderColor}
        placeholder="Search by Warehouse"
      ></input>
      <button>
        <AiOutlineSearch className="text-primaryblue  mr-2 w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
