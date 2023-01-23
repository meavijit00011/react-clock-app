import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useRef,
} from "react";
import classes from "./StopWatch.module.css";
let isInitial = true;
let initialState = {
  second: 0,
  minute: 0,
  hour: 0,
};
const reducer = (state, action) => {
  if (action.type == "inc") {
    let obj = {
      second: state.second + 1,
      minute: state.minute,
      hour: state.hour,
    };
    if (obj.second > 59) {
      obj["second"] = 0;
      obj["minute"] = obj["minute"] + 1;
    }
    if (obj.minute > 59) {
      obj["minute"] = 0;
      obj["hour"] = obj["hour"] + 1;
    }
    return obj;
  }
  if (action.type == "reset") {
    return {
      second: 0,
      minute: 0,
      hour: 0,
    };
  }
};
const StopWatch = () => {
  const [start, setStart] = useState(false);
  const [lap, setLap] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateCount = useCallback(() => {
    dispatch({ type: "inc" });
  }, [state]);
  useEffect(() => {
    let timeOut;
    if (start) {
      timeOut = setTimeout(updateCount, 1000);
    }
    
    return () => {
      clearTimeout(timeOut);
    };
  }, [start, updateCount]);

  const startHandler = () => {
    isInitial = false;
    setStart(!start);
  };
  let startButtonMessage = "Start";
  if (start) {
    startButtonMessage = "Stop";
  } else if (!isInitial && !start) {
    startButtonMessage = "Resume";
  }
  const resetHandler = () => {
    if (startButtonMessage == "Resume") {
      dispatch({ type: "reset" });
      setLap([]);
      isInitial = true;
    } else {
      setLap([
        ...lap,
        {
          id: (Math.random() * 100).toFixed(2),
          hour: state.hour,
          minute: state.minute,
          second: state.second,
        },
      ]);
    }
  };
  return (
    <div>
      <div className={classes.time__container}>
        <span>{state.hour} : </span>
        <span>{state.minute} : </span>
        <span>{state.second}</span>
      </div>
      <div className={classes.lap__details__container}>
        {lap.map((lap) => {
          return (
            <div className={classes.lap__details} key={lap.id}>
              <span>{lap.hour} : </span>
              <span>{lap.minute} : </span>
              <span>{lap.second}</span>
              <hr></hr>
            </div>
          );
        })}
      </div>
      <div className={classes.stopwatch__options}>
        <button onClick={resetHandler}>
          {startButtonMessage == "Resume" ? "Reset" : "Lap"}
        </button>
        <button onClick={startHandler}>{startButtonMessage}</button>
      </div>
    </div>
  );
};

export default StopWatch;
