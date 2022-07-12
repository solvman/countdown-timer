import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 25,
};

export const sessionLengthSlice = createSlice({
  name: "sessionlength",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < 60) {
        state.value++;
      }
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value--;
      }
    },
  },
});

export default sessionLengthSlice.reducer;
export const { increment, decrement } = sessionLengthSlice.actions;
