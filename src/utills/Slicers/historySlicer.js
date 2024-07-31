import { createSlice } from "@reduxjs/toolkit";

const historySlicer = createSlice({
  name: "history",
  initialState: {
    HistoryList: [],
  },
  reducers: {
    historymessages: (state, actions) => {
      const status =
        state.HistoryList &&
        state.HistoryList.find((item) => item?.id == actions.payload.id);

      if (!status) state.HistoryList.unshift(actions.payload);
    },
  },
});
export const { historymessages } = historySlicer.actions;
export default historySlicer.reducer;
