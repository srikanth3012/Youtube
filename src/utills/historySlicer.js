import { createSlice } from "@reduxjs/toolkit";

const historySlicer = createSlice({
  name: "history",
  initialState: {
    HistoryList: [],
  },
  reducers: {
    historymessages: (state, actions) => {
      state.HistoryList.push(actions.payload);
    },
  },
});
export const { historymessages } = historySlicer.actions;
export default historySlicer.reducer;
