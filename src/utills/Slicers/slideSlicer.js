import { createSlice } from "@reduxjs/toolkit";

const slideSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    watchtoggle: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, watchtoggle } = slideSlice.actions;
export default slideSlice.reducer;
