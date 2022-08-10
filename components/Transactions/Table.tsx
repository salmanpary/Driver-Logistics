import React from 'react'
import { useSelector } from 'react-redux';
import ApprovalOrRejectedCard from "./ApprovalOrRejectedCard";
import PendingApprovalCard from "./PendingApprovalCard";
import PendingPodCard from "./PendingPodCard";
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
      
  return (
    <>
    {approvalstatus[0].selected ? <PendingApprovalCard /> : null}
    {approvalstatus[1].selected ? <ApprovalOrRejectedCard /> : null}
    {approvalstatus[2].selected ? <PendingPodCard /> : null}
    </>
  )
}

export default Table