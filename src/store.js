import { configureStore } from "@reduxjs/toolkit";
import slideSlice from "./utills/Slicers/slideSlicer";
import searchSlicer from "./utills/Slicers/searchSlicer";
import LiveChatSlicer from "./utills/Slicers/LiveChatSlicer";
import historySlicer from "./utills/Slicers/historySlicer";
import BackslideSlice from "./utills/Slicers/BacksideSlidebar";
import watchlaterslicer from "./utills/Slicers/watchlaterslicer";

const store = configureStore({
  reducer: {
    app: slideSlice,
    search: searchSlicer,
    live: LiveChatSlicer,
    history: historySlicer,
    BackSide: BackslideSlice,
    WatchLater: watchlaterslicer,
  },
});
export default store;
