import React, { useEffect } from "react";

export const Timer = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prev) => prev - 10);
      }, 10);

      if (time <= 0) {
        setTime(0);
      }
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <h1>Timer</h1>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value).slice(-2)}
        className="timeIn"
      />
      <h2>
        <span>{("0" + Math.floor((time / 86400000) % 24)).slice(-2)}</span> :{" "}
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span> :{" "}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span> :{" "}
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </h2>

      {timerOn && <button onClick={() => setTimeOn(false)}>Stop</button>}

      {!timerOn && time !== 0 && (
        <button onClick={() => setTimeOn(true)}>START</button>
      )}
      {!timerOn && <button onClick={() => setTime(0)}>Reset</button>}
    </div>
  );
};
