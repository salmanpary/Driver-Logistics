import { configureStore } from "@reduxjs/toolkit";
import approvalReducer from "./features/ApprovalSlice";
import filterReducer from "./features/filterSlice";
import optionsReducer from "./features/optionsSlice";
import pageNumberReducer from "./features/PagenumberSlice";
export default configureStore({
  reducer: {
    options: optionsReducer,
    filters: filterReducer,
    approvalstatus: approvalReducer,
    pagenumbers: pageNumberReducer,
  },
});
