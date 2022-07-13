import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, setTimerOn } from "./sessionSlice";
import {
  MdPauseCircleFilled,
  MdPlayCircleFilled,
  MdReplayCircleFilled,
} from "react-icons/md";

function Session() {
  const timer = useSelector((state) => state.session.timer);
  const timerOn = useSelector((state) => state.session.timerOn);
  const dispatch = useDispatch();

  useEffect(() => {
    let timerId = null;

    if (timerOn) {
      timerId = setInterval(() => dispatch(decrement()), 1000);
    } else {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [timerOn, dispatch]);

  return (
    <div className="session">
      <h3>Session</h3>
      <h1 className="timer">
        <span>{("0" + Math.floor(timer / 60)).slice(-2)}</span>
        <span>:</span>
        <span>{("0" + (timer % 60)).slice(-2)}</span>
      </h1>
      <div className="buttons">
        <button disabled={timerOn} onClick={() => dispatch(setTimerOn(true))}>
          <MdPlayCircleFilled />
        </button>
        <button disabled={!timerOn} onClick={() => dispatch(setTimerOn(false))}>
          <MdPauseCircleFilled />
        </button>
        <button disabled={timerOn}>
          <MdReplayCircleFilled />
        </button>
      </div>
    </div>
  );
}

export default Session;
