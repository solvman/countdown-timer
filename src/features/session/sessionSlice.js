import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "session",
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
    decrementByMinute: (state) => {
      if (state.timer > 60) state.timer -= 60;
    },
    incrementByMinute: (state) => {
      if (state.timer < 60 * 60) state.timer += 60;
    },
    setTimerOn: (state, action) => {
      state.timerOn = action.payload;
    },
    setTimer: (state, action) => {
      if (action.payload >= 60 && action.payload <= 60 * 60) {
        state.timer = action.payload;
      }
    },
    setDefault: (state) => {
      state.timer = initialState.timer;
    },
    setTimerType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export default sessionSlice.reducer;
export const {
  decrement,
  setTimerOn,
  setTimer,
  setDefault,
  setTimerType,
  decrementByMinute,
  incrementByMinute,
} = sessionSlice.actions;
