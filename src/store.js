import { configureStore } from "@reduxjs/toolkit";
import slideSlice from "./utills/slideSlicer";
import searchSlicer from "./utills/searchSlicer";
import LiveChatSlicer from "./utills/LiveChatSlicer";
import historySlicer from "./utills/historySlicer";
import BackslideSlice from "./utills/BacksideSlidebar";

const store = configureStore({
  reducer: {
    app: slideSlice,
    search: searchSlicer,
    live: LiveChatSlicer,
    history: historySlicer,
    BackSide: BackslideSlice,
  },
});
export default store;
