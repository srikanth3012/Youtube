import { createSlice } from "@reduxjs/toolkit";

const historySlicer = createSlice({
  name: "history",
  initialState: {
    HistoryList: [],
  },
  reducers: {
    historymessages: (state, actions) => {
      state.HistoryList.splice(20, 1);
      state.HistoryList.unshift(actions.payload);
    },
  },
});
export const { historymessages } = historySlicer.actions;
export default historySlicer.reducer;
