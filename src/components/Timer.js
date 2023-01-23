import React, { useCallback, useEffect, useState } from "react";
import classes from "./Timer.module.css";
const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [selectField, setSelectField] = useState(null);
  const [start, setStart] = useState(false);
  const minuteChangeHandler = (e) => {
    let value = e.target.value;
    if (!value) {
      return setMinute(0);
    }
    setMinute(Number(value));
  };
  const selectFieldHandler = (field) => {
    setSelectField(field);
  };
  const secondChangeHandler = (e) => {
    let value = e.target.value;
    if (!value) {
      return setSecond(0);
    }
    if (value > 59) {
      let min = Math.floor(value / 60);
      let second = value % 60;
      return setSecond(second), setMinute(minute + min);
    }
    setSecond(Number(value));
  };
  const inuptBlurHandler = () => {
    setSelectField(null);
  };
  const updateSecond = useCallback(() => {
    setSecond(second - 1);
  }, [second]);
  if (start && second == 0) {
    if (minute >= 1) {
      setSecond(60);
      setMinute(minute - 1);
    } else {
      setStart(false);
    }
  }

  useEffect(() => {
    let timeout;
    if (start) {
      timeout = setTimeout(updateSecond, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [start, updateSecond]);
  const startHandler = () => {
    setStart(!start);
  };
  const cancelButtonHandler = () => {
    setStart(false);
    setMinute(0);
    setSecond(0);
  };
  return (
    <div>
      <div className={classes.timer__container}>
        <div onClick={selectFieldHandler.bind(false, "minute")}>
          {selectField == "minute" ? (
            <input
              type="number"
              value={minute}
              autoFocus
              onChange={minuteChangeHandler}
              onBlur={inuptBlurHandler}
              min='0'
            ></input>
          ) : (
            <span>{minute}</span>
          )}
        </div>
        <span>:</span>
        <div onClick={selectFieldHandler.bind(false, "second")}>
          {selectField == "second" ? (
            <input
              type="number"
              value={second}
              autoFocus
              onChange={secondChangeHandler}
              onBlur={inuptBlurHandler}
              min='0'
            ></input>
          ) : (
            <span>{second}</span>
          )}
        </div>
      </div>
      <div className={classes.timer__options}>
        <button onClick={cancelButtonHandler}>Cancel</button>
        <button onClick={startHandler}>{start ? "Stop" : "Start"}</button>
      </div>
    </div>
  );
};

export default Timer;
