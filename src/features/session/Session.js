import React from "react";
import {
  MdPauseCircleFilled,
  MdPlayCircleFilled,
  MdReplayCircleFilled,
} from "react-icons/md";

function Session() {
  return (
    <div className="session">
      <h3>Session</h3>
      <h1 className="timer">20:30</h1>
      <div className="buttons">
        <button>
          <MdPlayCircleFilled />
        </button>
        <button>
          <MdPauseCircleFilled />
        </button>
        <button>
          <MdReplayCircleFilled />
        </button>
      </div>
    </div>
  );
}

export default Session;
