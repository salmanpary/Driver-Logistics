import { createSlice } from "@reduxjs/toolkit";
interface ApprovalStateType {
  name: string;
  selected: boolean;
}
const initialState: ApprovalStateType[] = [
  {
    name: "Pending Approvals",
    selected: true,
  },
  {
    name: "Approved/Rejected",
    selected: false,
  },
  {
    name: "Pending POD",
    selected: false,
  },
];

const ApprovalSlice = createSlice({
  name: "approvalstatus",
  initialState,
  reducers: {
    selectpendingapprovals(state: ApprovalStateType[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[0].selected = true;
    },
    selectapprovedrejected(state: ApprovalStateType[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[1].selected = true;
    },
    selectpendingpod(state: ApprovalStateType[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[2].selected = true;
    },
  },
});
export const {
  selectpendingapprovals,
  selectapprovedrejected,
  selectpendingpod,
} = ApprovalSlice.actions;
export default ApprovalSlice.reducer;
