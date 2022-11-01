import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { DOTS, usePagination } from "./usePagination";
interface Props {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}
const Pagination: React.FC<Props> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;
  interface PaginationRange {
    currentPage: number;
    totalCount: number;
    pageSize: number;
    siblingCount: number;
  }
  //give type for usePagination
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  console.log(currentPage);
  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="flex">
      <button
        className="bg-primaryred grid place-content-center rounded-l-md p-2 hover:bg-primaryblue hover:opacity-90 disabled:bg-grey disabled:text-primaryblue"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <RiArrowLeftSLine
          className="w-8 h-8"
          color={currentPage === 1 ? "gray" : "white"}
        />
      </button>
      <div className="flex  justify-center items-center text-primaryblue text-center font-semibold">
        {paginationRange.map((pageNumber: number | typeof DOTS) => {
          if (pageNumber === DOTS) {
            return (
              <li className="bg-grey py-3 px-5 border border-primaryblue">
                &#8230;
              </li>
            );
          }

          return (
            <button
              onClick={() => onPageChange(pageNumber)}
              className={`py-3 px-5  border border-primaryblue hover:bg-primaryblue hover:bg-opacity-95 hover:text-white ${
                currentPage === pageNumber
                  ? "bg-primaryblue text-white"
                  : "bg-grey text-primaryblue"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        className="bg-primaryred grid place-content-center rounded-r-lg p-2 hover:bg-primaryblue hover:opacity-90 disabled:bg-grey disabled:text-primaryblue"
        onClick={onNext}
        disabled={currentPage === lastPage}
      >
        <RiArrowRightSLine
          className="w-8 h-8"
          color={currentPage === lastPage ? "gray" : "white"}
        />
      </button>
    </ul>
  );
};

export default Pagination;
