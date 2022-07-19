import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./breakLengthSlice";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";

function BreakLength() {
  const breaklength = useSelector((state) => state.break.value);
  const timerOn = useSelector((state) => state.session.timerOn);
  const dispatch = useDispatch();

  return (
    <div className="length">
      <h3 id="break-label">Break Length</h3>
      <div>
        <button
          disabled={timerOn}
          id="break-decrement"
          onClick={() => dispatch(decrement())}
        >
          <BsArrowDownCircleFill />
        </button>
        <span className="length--counter" id="break-length">
          {breaklength}
        </span>
        <button
          disabled={timerOn}
          id="break-increment"
          onClick={() => dispatch(increment())}
        >
          <BsArrowUpCircleFill />
        </button>
      </div>
    </div>
  );
}

export default BreakLength;
