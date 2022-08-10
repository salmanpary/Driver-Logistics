import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  selectpagenumber1,
  selectpagenumber2,
  selectpagenumber3,
  selectpagenumber4,
} from "../../redux/features/PagenumberSlice";
const NumberFilter = () => {
  const dispatch = useDispatch();
  const PagenumberSelection = (item: number) => {
    switch (item) {
      case 1:
        dispatch(selectpagenumber1());
        break;
      case 2:
        dispatch(selectpagenumber2());
        break;
      case 3:
        dispatch(selectpagenumber3());
        break;
      case 4:
        dispatch(selectpagenumber4());
    }
  };
  const pagenumberdata = useSelector((state: any) => state.pagenumbers);
  return (
    <div className="grid grid-cols-6 place-content-center w-72">
      <button className="bg-primaryred grid place-content-center rounded-l-md p-2">
        <RiArrowLeftSLine className="w-8 h-8" color="white" />
      </button>
      {[1, 2, 3, 4].map((item: number, index: number) => {
        return (
          <button
            className={`hover:bg-primaryblue hover:bg-opacity-95 hover:text-white grid place-content-center border border-primaryblue ${
              pagenumberdata[index].selected
                ? "bg-primaryblue text-white"
                : "bg-grey text-primaryblue"
            }`}
            onClick={() => PagenumberSelection(item)}
          >
            {item}
          </button>
        );
      })}

      <button className="bg-primaryred grid place-content-center rounded-r-lg">
        <RiArrowRightSLine className="w-8 h-8" color="white" />
      </button>
    </div>
  );
};

export default NumberFilter;
