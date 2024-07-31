import { createSlice } from "@reduxjs/toolkit";

const BackslideSlice = createSlice({
  name: "BackSide",
  initialState: {
    istoggleOpen: true,
  },
  reducers: {
    opentoggle: (state) => {
      state.istoggleOpen = true;
    },
    closetoggle: (state) => {
      state.istoggleOpen = false;
    },
  },
});
export const { opentoggle, closetoggle } = BackslideSlice.actions;
export default BackslideSlice.reducer;
