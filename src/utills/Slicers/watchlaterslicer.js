import { createSlice } from "@reduxjs/toolkit";

const WatchLaterSlicer = createSlice({
  name: "WatchLater",
  initialState: {
    WatchLaterList: [],
  },
  reducers: {
    WatchLater: (state, actions) => {
      state.WatchLaterList.unshift(actions.payload);
    },
  },
});
export const { WatchLater } = WatchLaterSlicer.actions;
export default WatchLaterSlicer.reducer;
