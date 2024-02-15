import { createSlice, nanoid } from "@reduxjs/toolkit";

export const Count = createSlice({
  name: "count",
  initialState: {
    CardSlice: [],
  },
  reducers: {
    addcard: (state, actions) => {
      state.CardSlice.push(actions.payload.item);
    },
  },
});

export const { addcard } = Count.actions;
export default Count.reducer;
