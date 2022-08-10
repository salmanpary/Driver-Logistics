import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectall,
  selectapproved,
  selectrejected,
} from "../../redux/features/filterSlice";
const Dropdown = () => {
  interface FilterState {
    name: string;
    selected: boolean;
  }
  interface StateType {
    filters: FilterState[];
  }
  const dispatch = useDispatch();
  const filters: FilterState[] = useSelector(
    (state: StateType) => state.filters
  );
  const [open, setOpen] = React.useState(false);
  const OpenDropdown = () => {
    setOpen(!open);
  };
  const Selectapproved = () => {
    dispatch(selectapproved());
  };
  const Selectrejected = () => {
    dispatch(selectrejected());
  };
  const Selectall = () => {
    dispatch(selectall());
  };

  return (
    <div className="p-10">
      <div className=" inline-block relative" onClick={OpenDropdown}>
        <button className="hover:bg-opacity-90 border-2 border-grey text-primaryred font-semibold py-2 px-4 rounded-lg inline-flex items-center w-44 gap-2">
          <span className="mr-1">Filter By Status</span>
          {open ? (
            <BsChevronUp className="w-4 h-4 mt-1" />
          ) : (
            <BsChevronDown className="w-4 h-4 mt-1" />
          )}
        </button>
        <ul
          className={` absolute ${
            !open ? "hidden" : ""
          }  mt-1 border-2 border-grey rounded w-44 text-primaryblue bg-white z-10`}
        >
          <li className="">
            <a
              className={`rounded-t  py-2 px-4 block hover:bg-opacity-90 hover:bg-primaryblue hover:text-white hover:rounded-t-sm  ${
                filters[0].selected ? "bg-primaryblue text-white" : ""
              } cursor-pointer`}
              onClick={Selectapproved}
            >
              Approved
            </a>
          </li>
          <li className="">
            <a
              className={`py-2 px-4 block hover:bg-opacity-90 hover:bg-primaryblue hover:text-white  ${
                filters[1].selected ? "bg-primaryblue text-white" : ""
              } cursor-pointer`}
              onClick={Selectrejected}
            >
              Rejected
            </a>
          </li>
          <li className="">
            <a
              className={`rounded-b  py-2 px-4 block hover:bg-opacity-90 hover:bg-primaryblue hover:text-white ${
                filters[2].selected ? "bg-primaryblue text-white" : ""
              } cursor-pointer`}
              onClick={Selectall}
            >
              All
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
