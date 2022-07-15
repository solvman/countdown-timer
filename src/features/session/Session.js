import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, setTimerOn, setTimerType, setTimer } from "./sessionSlice";
import { setDefault as setDefaultBreakLength } from "../breaklength/breakLengthSlice";
import { setDefault as setDefaultSessionLength } from "../sessionlength/sessionLengthSlice";
import { setDefault as setDefaultSession } from "../session/sessionSlice";
import {
  MdPauseCircleFilled,
  MdPlayCircleFilled,
  MdReplayCircleFilled,
} from "react-icons/md";

function Session() {
  const timer = useSelector((state) => state.session.timer);
  const timerType = useSelector((state) => state.session.type);
  const timerOn = useSelector((state) => state.session.timerOn);
  const breakLength = useSelector((state) => state.break.value);
  const sessionLength = useSelector((state) => state.sessionlength.value);
  const dispatch = useDispatch();

  useEffect(() => {
    let timerId = null;
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = date + second;

    if (timerOn) {
      timerId = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          dispatch(decrement());
          nextDate += second;
        }

        if (timer === 0) {
          console.log("Beeeep");
          if (timerType === "session") {
            dispatch(setTimer(breakLength * 60));
            dispatch(setTimerType("break"));
          } else if (timerType === "break") {
            dispatch(setTimer(sessionLength * 60));
            dispatch(setTimerType("session"));
          }
        }
      }, 10);
    } else {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerOn, dispatch, timer]);

  const ResetTimer = () => {
    dispatch(setDefaultSession());
    dispatch(setDefaultBreakLength());
    dispatch(setDefaultSessionLength());
  };

  return (
    <div className="session">
      <h3 className="timer-type">{timerType}</h3>
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
        <button disabled={timerOn} onClick={ResetTimer}>
          <MdReplayCircleFilled />
        </button>
      </div>
    </div>
  );
}

export default Session;
