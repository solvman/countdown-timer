import { configureStore } from "@reduxjs/toolkit";
import breakLengthReducer from "../features/breaklength/breakLengthSlice";
import sessionLengthReducer from "../features/sessionlength/sessionLengthSlice";
import sessionReducer from "../features/session/sessionSlice";

export const store = configureStore({
  reducer: {
    break: breakLengthReducer,
    sessionlength: sessionLengthReducer,
    session: sessionReducer,
  },
});
