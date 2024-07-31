import { createSlice } from "@reduxjs/toolkit";

const searchSlicer = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    chaceResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { chaceResults } = searchSlicer.actions;
export default searchSlicer.reducer;
