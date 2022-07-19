import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, setTimerOn, setTimerType, setTimer } from "./sessionSlice";
import { setDefault as setDefaultBreakLength } from "../breaklength/breakLengthSlice";
import { setDefault as setDefaultSessionLength } from "../sessionlength/sessionLengthSlice";
import { setDefault as setDefaultSession } from "../session/sessionSlice";
import audioFile from "../../beepSoundEffect.mp3";
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
  const beep = document.getElementById("beep");
  const timerId = useRef(null);

  useEffect(() => {
    if (timer && timerOn) {
      timerId.current = setTimeout(() => {
        dispatch(decrement());
      }, 1000);
    } else {
      clearTimeout(timerId.current);
    }

    if (!timer && timerType === "session") {
      dispatch(setTimerType("break"));
      dispatch(setTimer(breakLength * 60));
      beep.currentTime = 0;
      beep.play();
    }
    if (!timer && timerType === "break") {
      dispatch(setTimerType("session"));
      dispatch(setTimer(sessionLength * 60));
      beep.currentTime = 0;
      beep.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerOn, timer, timerId]);

  const ResetTimer = () => {
    clearTimeout(timerId.current);
    dispatch(setTimerOn(false));
    dispatch(setDefaultSession());
    dispatch(setDefaultBreakLength());
    dispatch(setDefaultSessionLength());
    dispatch(setTimerType("session"));
    beep.pause();
    beep.currentTime = 0;
  };

  return (
    <div className="session">
      <h3 className="timer-type" id="timer-label">
        {timerType}
      </h3>
      <h1 className="timer" id="time-left">
        {("0" + Math.floor(timer / 60)).slice(-2) +
          ":" +
          ("0" + (timer % 60)).slice(-2)}
      </h1>
      <div className="buttons">
        {!timerOn ? (
          <button
            id="start_stop"
            disabled={timerOn}
            onClick={() => dispatch(setTimerOn(true))}
          >
            <MdPlayCircleFilled />
          </button>
        ) : (
          <button id="start_stop" onClick={() => dispatch(setTimerOn(false))}>
            <MdPauseCircleFilled />
          </button>
        )}
        <button id="reset" onClick={ResetTimer}>
          <MdReplayCircleFilled />
        </button>
      </div>

      <audio id="beep" src={audioFile}></audio>
    </div>
  );
}

export default Session;
