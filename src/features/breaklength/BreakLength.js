import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./breakLengthSlice";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";

function BreakLength() {
  const breaklength = useSelector((state) => state.break.value);
  const dispatch = useDispatch();

  return (
    <div className="length">
      <h3 id="break-length">Break Length</h3>
      <div>
        <button
          className="break-increment"
          onClick={() => dispatch(decrement())}
        >
          <BsArrowDownCircleFill />
        </button>
        <span className="length--counter">
          {breaklength < 10 ? `0${breaklength}` : breaklength}
        </span>
        <button
          className="break-decrement"
          onClick={() => dispatch(increment())}
        >
          <BsArrowUpCircleFill />
        </button>
      </div>
    </div>
  );
}

export default BreakLength;
