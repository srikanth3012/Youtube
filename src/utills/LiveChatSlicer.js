import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlicer = createSlice({
  name: "LiveChat",
  initialState: {
    Messages: [],
  },
  reducers: {
    appmessages: (state, actions) => {
      state.Messages.splice(20, 1);
      state.Messages.unshift(actions.payload);
    },
  },
});
export const { appmessages } = LiveChatSlicer.actions;
export default LiveChatSlicer.reducer;
