import { createSlice } from "@reduxjs/toolkit";
interface OptionState {
  name: string;
  selected: boolean;
}
const initialState: OptionState[] = [
  {
    name: "Transactions",
    selected: true,
  },
  {
    name: "Warehouses",
    selected: false,
  },
  {
    name: "Profile",
    selected: false,
  },
];
export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    selecttransactions(state: OptionState[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[0].selected = true;
    },
    selectwarehouses(state: OptionState[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[1].selected = true;
    },
    selectprofile(state: OptionState[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[2].selected = true;
    },
  },
});
export const { selecttransactions, selectwarehouses, selectprofile } =
  optionsSlice.actions;
export default optionsSlice.reducer;
