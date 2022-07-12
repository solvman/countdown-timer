import { configureStore } from "@reduxjs/toolkit";
import breakLengthReducer from "../features/breaklength/breakLengthSlice";
import sessionLengthReducer from "../features/sessionlength/sessionLengthSlice";

export const store = configureStore({
  reducer: {
    break: breakLengthReducer,
    sessionlength: sessionLengthReducer,
  },
});
