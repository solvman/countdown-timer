import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimer } from "../session/sessionSlice";
import { increment, decrement } from "./sessionLengthSlice";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";

function BreakLength() {
  const sessionlength = useSelector((state) => state.sessionlength.value);
  const timerOn = useSelector((state) => state.session.timerOn);
  const dispatch = useDispatch();

  return (
    <div className="length">
      <h3 id="session-length">Session Length</h3>
      <div>
        <button
          disabled={timerOn}
          className="session-decrement"
          onClick={() => {
            dispatch(setTimer(sessionlength * 60 - 60));
            dispatch(decrement());
          }}
        >
          <BsArrowDownCircleFill />
        </button>
        <span className="length--counter">
          {sessionlength < 10 ? `0${sessionlength}` : sessionlength}
        </span>
        <button
          disabled={timerOn}
          className="session-increment"
          onClick={() => {
            dispatch(setTimer(sessionlength * 60 + 60));
            dispatch(increment());
          }}
        >
          <BsArrowUpCircleFill />
        </button>
      </div>
    </div>
  );
}

export default BreakLength;
