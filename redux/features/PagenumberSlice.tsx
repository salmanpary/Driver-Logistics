import { createSlice } from "@reduxjs/toolkit";
interface PagenumberType {
  pagenumber: number;
  selected: boolean;
}
const initialState: PagenumberType[] = [
  {
    pagenumber: 1,
    selected: true,
  },
  {
    pagenumber: 2,
    selected: false,
  },
  {
    pagenumber: 3,
    selected: false,
  },
  {
    pagenumber: 4,
    selected: false,
  },
];
const pagenumberSlice = createSlice({
  name: "pagenumbers",
  initialState,
  reducers: {
    selectpagenumber1(state: PagenumberType[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[0].selected = true;
    },
    selectpagenumber2(state: PagenumberType[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[1].selected = true;
    },
    selectpagenumber3(state: PagenumberType[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[2].selected = true;
    },
    selectpagenumber4(state: PagenumberType[]) {
      state.forEach((item) => {
        item.selected = false;
      });
      state[3].selected = true;
    },
  },
});
export const {
  selectpagenumber1,
  selectpagenumber2,
  selectpagenumber3,
  selectpagenumber4,
} = pagenumberSlice.actions;
export default pagenumberSlice.reducer;
