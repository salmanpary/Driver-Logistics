import { createSlice } from "@reduxjs/toolkit";
interface filterState {
  name: string;
  selected: boolean;
}
const initialState: filterState[] = [
  {
    name: "Approved",
    selected: false,
  },
  {
    name: "Rejected",
    selected: false,
  },
  {
    name: "All",
    selected: true,
  },
];
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    selectapproved(state: filterState[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[0].selected = true;
    },
    selectrejected(state: filterState[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[1].selected = true;
    },
    selectall(state: filterState[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[2].selected = true;
    },
  },
});
export const { selectapproved, selectrejected, selectall } =
  filterSlice.actions;
export default filterSlice.reducer;
