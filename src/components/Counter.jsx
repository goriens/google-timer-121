import React, { useEffect } from "react";
import { useState } from "react";

export const Counter = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <h1>Stop Watch</h1>
      <h2>
        <span>{("0" + Math.floor((time / 86400000) % 24)).slice(-2)}</span> :{" "}
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span> :{" "}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span> :{" "}
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </h2>

      {!timerOn && time === 0 && (
        <button onClick={() => setTimeOn(true)}>Start</button>
      )}
      {timerOn && <button onClick={() => setTimeOn(false)}>Stop</button>}

      {!timerOn && time !== 0 && (
        <button onClick={() => setTimeOn(true)}>Resume</button>
      )}
      {!timerOn && <button onClick={() => setTime(0)}>Reset</button>}
    </div>
  );
};
