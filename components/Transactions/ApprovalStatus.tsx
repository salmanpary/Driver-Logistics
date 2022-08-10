import { useDispatch, useSelector } from "react-redux";
import {
  selectapprovedrejected,
  selectpendingapprovals,
  selectpendingpod,
} from "../../redux/features/ApprovalSlice";
const ApprovalStatus = () => {
  interface ApprovalStatusType {
    name: string;
    selected: boolean;
  }
  interface StateType {
    approvalstatus: ApprovalStatusType[];
  }
  const dispatch = useDispatch();
  const approvalstatus: ApprovalStatusType[] = useSelector(
    (state: StateType) => state.approvalstatus
  );

  const Selectoption1 = () => {
    dispatch(selectpendingapprovals());
  };
  const Selectoption2 = () => {
    dispatch(selectapprovedrejected());
  };
  const Selectoption3 = () => {
    dispatch(selectpendingpod());
  };

  return (
    <div className="grid grid-cols-3 text-center">
      <button
        className={`hover:bg-opacity-90 hover:text-white  hover:bg-primaryblue rounded-l-lg p-3 ${
          approvalstatus[0].selected ? "bg-primaryblue text-white" : "bg-grey"
        }
         "
        }
        
        `}
        onClick={Selectoption1}
      >
        Pending Approvals
      </button>
      <button
        className={`hover:bg-opacity-90 hover:text-white  hover:bg-primaryblue  p-3 ${
          approvalstatus[1].selected ? "bg-primaryblue text-white" : "bg-grey"
        }`}
        onClick={Selectoption2}
      >
        Approved/Rejected
      </button>
      <button
        className={`hover:bg-opacity-90 hover:text-white  hover:bg-primaryblue  rounded-r-lg p-3 ${
          approvalstatus[2].selected ? "bg-primaryblue text-white" : "bg-grey"
        }`}
        onClick={Selectoption3}
      >
        Pending POD
      </button>
    </div>
  );
};

export default ApprovalStatus;
