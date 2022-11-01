import { configureStore } from "@reduxjs/toolkit";
import approvalReducer from "./features/ApprovalSlice";
import filterReducer from "./features/filterSlice";
import optionsReducer from "./features/optionsSlice";
export default configureStore({
  reducer: {
    options: optionsReducer,
    filters: filterReducer,
    approvalstatus: approvalReducer,

  },
});
