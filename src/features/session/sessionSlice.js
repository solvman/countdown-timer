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
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
    setDefault: (state) => {
      state.timer = initialState.timer;
    },
  },
});

export default sessionSlice.reducer;
export const { decrement, setTimerOn, setTimer, setDefault } =
  sessionSlice.actions;
