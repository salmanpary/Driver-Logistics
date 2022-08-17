import React from "react";
import { useSelector } from "react-redux";
import ApprovalOrRejectedCard from "./ApprovalOrRejectedCard";
import PendingApprovalCard from "./PendingApprovalCard";
import PendingPodCard from "./PendingPodCard";
import data from "./Pagination/pending-approval-data.json";
import { useState, useMemo } from "react";
import Pagination from "./Pagination/Pagination";
let PageSize = 7;
const Table = () => {
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
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      {approvalstatus[0].selected &&
        currentTableData.map((item, index) => (
          <PendingApprovalCard
            key={index}
            number={item.no}
            imageurl={item.imageurl}
            companyname={item.title}
            warehousename={item.warehousename}
            lrnumber={item.lrnumber}
            invoicenumber={item.invoice}
          />
        ))}
      {approvalstatus[0].selected && (
        <div className="grid place-content-center my-6">

      
        <Pagination
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
          </div>
      )}

      {approvalstatus[1].selected ? <ApprovalOrRejectedCard /> : null}
      {approvalstatus[2].selected ? <PendingPodCard /> : null}
    </>
  );
};

export default Table;
