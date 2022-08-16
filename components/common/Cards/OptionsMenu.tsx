import { BiTransfer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TbBuildingWarehouse } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  selectprofile,
  selecttransactions,
  selectwarehouses,
} from "../../../redux/features/optionsSlice";
import Link from "next/link";
import { useRouter} from "next/router";
import { useEffect } from "react";
const OptionsMenu = () => {
  interface OptionType {
    name: string;
    selected: boolean;
  }
  interface StateType {
    options: OptionType[];
  }
  const dispatch = useDispatch();
  const options: OptionType[] = useSelector(
    (state: StateType) => state.options
  );
  const Selectoption1 = () => {
    dispatch(selecttransactions());
  };
  const Selectoption2 = () => {
    dispatch(selectwarehouses());
  };
  const Selectoption3 = () => {
    dispatch(selectprofile());
  };
  const router=useRouter();
  return (
    <div className="flex flex-col w-60  gap-1 min-w-[240px]">
      <Link href="/transactions">
    
      <button
        className={` hover:bg-primaryblue hover:text-white hover:bg-opacity-90 flex  rounded-t-lg p-3 gap-2 items-center ${
          options[0].selected ||router.pathname==='/transactions'
            ? "bg-primaryblue text-white scale-[101%]"
            : "text-primaryblue bg-grey"
        }`}
        onClick={Selectoption1}
      >
        <BiTransfer className="text-3xl " />
        <p>{options[0].name}</p>
      </button>
      </Link>
      <Link href="/warehouses">
      <button
        className={`hover:bg-primaryblue hover:text-white hover:bg-opacity-90  flex  p-3 items-center gap-2 ${
          options[1].selected||router.pathname==='/warehouses'
            ? "bg-primaryblue text-white scale-[101%]"
            : "text-primaryblue bg-grey"
        }`}
        onClick={Selectoption2}
      >
        <TbBuildingWarehouse className="text-3xl " />
        <p>{options[1].name}</p>
      </button>
      </Link>
      <Link href="/profile">
      <button
        className={`hover:bg-primaryblue hover:text-white hover:bg-opacity-90  flex items-center rounded-b-lg p-3 gap-2 ${
          options[2].selected ||router.pathname==='/profile'
            ? "bg-primaryblue text-white scale-[101%]"
            : "text-primaryblue bg-grey"
        }`}
        onClick={Selectoption3}
      >
        <CgProfile className="text-3xl " />
        <p>{options[2].name}</p>
      </button>
      </Link>
    </div>
  );
};

export default OptionsMenu;
