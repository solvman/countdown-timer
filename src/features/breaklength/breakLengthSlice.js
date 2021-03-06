import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5,
};

export const breakLengthSlice = createSlice({
  name: "break",
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
    setDefault: (state) => {
      state.value = initialState.value;
    },
  },
});

export default breakLengthSlice.reducer;
export const { increment, decrement, setDefault } = breakLengthSlice.actions;
