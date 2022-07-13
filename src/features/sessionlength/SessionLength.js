import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./sessionLengthSlice";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";

function BreakLength() {
  const sessionlength = useSelector((state) => state.sessionlength.value);
  const dispatch = useDispatch();

  return (
    <div className="length">
      <h3 id="session-length">Session Length</h3>
      <div>
        <button
          className="session-increment"
          onClick={() => dispatch(decrement())}
        >
          <BsArrowDownCircleFill />
        </button>
        <span className="length--counter">
          {sessionlength < 10 ? `0${sessionlength}` : sessionlength}
        </span>
        <button
          className="session-decrement"
          onClick={() => dispatch(increment())}
        >
          <BsArrowUpCircleFill />
        </button>
      </div>
    </div>
  );
}

export default BreakLength;
