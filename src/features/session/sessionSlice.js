import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timer: 25 * 60,
  timerOn: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    decrement: (state) => {
      state.timer--;
    },
    setTimerOn: (state, action) => {
      state.timerOn = action.payload;
    },
  },
});

export default sessionSlice.reducer;
export const { decrement, setTimerOn } = sessionSlice.actions;
