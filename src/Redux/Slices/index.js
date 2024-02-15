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
    removecard: (state, actions) => {
      state.CardSlice.splice(actions.payload.index, 1);
    },
  },
});

export const { addcard, removecard } = Count.actions;
export default Count.reducer;
