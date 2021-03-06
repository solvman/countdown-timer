import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementByMinute, incrementByMinute } from "../session/sessionSlice";
import { increment, decrement } from "./sessionLengthSlice";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";

function BreakLength() {
  const sessionlength = useSelector((state) => state.sessionlength.value);
  const timerOn = useSelector((state) => state.session.timerOn);
  const dispatch = useDispatch();

  return (
    <div className="length">
      <h3 id="session-label">Session Length</h3>
      <div>
        <button
          disabled={timerOn}
          id="session-decrement"
          onClick={() => {
            dispatch(decrementByMinute());
            dispatch(decrement());
          }}
        >
          <BsArrowDownCircleFill />
        </button>
        <span className="length--counter" id="session-length">
          {sessionlength}
        </span>
        <button
          disabled={timerOn}
          id="session-increment"
          onClick={() => {
            dispatch(incrementByMinute());
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
