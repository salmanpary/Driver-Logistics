import OptionsMenu from "../common/Cards/OptionsMenu";
import Header from "../common/Header";
import ApprovalStatus from "./ApprovalStatus";
import Dropdown from "./Dropdown";
import NumberFilter from "./NumberFilter";

import SearchBar from "../common/Search/SearchBar";
import Table from "./Table";
import { useSelector } from "react-redux";
import ShowingNumber from "./ShowingNumber";
const TransationsPage = () => {
  interface ApprovalStatusType {
    name: string;
    selected: boolean;
  }
  interface StateType {
    approvalstatus: ApprovalStatusType[];
  }

  const approvalstatus: ApprovalStatusType[] = useSelector(
    (state: StateType) => state.approvalstatus
  );

  return (
    <>
      <Header />
 <div className="px-20 mt-5">


      <div className="flex gap-10">
        <OptionsMenu />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between  items-center gap-2">
            <SearchBar />
            {approvalstatus[1].selected && <Dropdown />}
            <ShowingNumber />
          </div>
          <ApprovalStatus />
          <div>

          <Table />
          </div>
          <div className="grid place-content-center">
            <NumberFilter />
          </div>
        </div>
      </div>
 </div>
    </>
  );
};

export default TransationsPage;
