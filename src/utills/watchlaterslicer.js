import { createSlice } from "@reduxjs/toolkit";

const WatchLaterSlicer = createSlice({
  name: "WatchLater",
  initialState: {
    WatchLaterList: [],
  },
  reducers: {
    WatchLater: (state, actions) => {
      state.WatchLaterList.push(actions.payload);
    },
  },
});
export const { WatchLater } = WatchLaterSlicer.actions;
export default WatchLaterSlicer.reducer;
