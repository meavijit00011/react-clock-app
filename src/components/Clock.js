import React, { useState } from "react";
import classes from "./Clock.module.css";
const Clock = () => {
  const [showDigital, setShowDigital] = useState(false);
  const [date, setDate] = useState(new Date());

  const remainingTime = 60 - date.getSeconds();
  setTimeout(() => {
    setDate(new Date());
  }, remainingTime * 1000);
  const setClock = () => {
    setShowDigital(!showDigital);
  };
  return (
    <div>
      {!showDigital && (
        <div className={classes.clock__container}>
          <div>
            <div>
              <span>12</span>
              <span>6</span>
            </div>
            <div>
              <span>1</span>
              <span>7</span>
            </div>
            <div>
              <span>2</span>
              <span>8</span>
            </div>
            <div>
              <span>3</span>
              <span>9</span>
            </div>
            <div>
              <span>4</span>
              <span>10</span>
            </div>
            <div>
              <span>5</span>
              <span>11</span>
            </div>
            <div
              style={{
                transform: `rotate(${(date.getMinutes() - 15) * 6}deg)`,
              }}
            ></div>
            <div
              style={{
                transform: `rotate(${
                  (date.getHours() - 15) * 30 + date.getMinutes() * 0.5
                }deg)`,
              }}
            ></div>
            <div></div>
          </div>
        </div>
      )}
      {showDigital && (
        <div className={classes.digital__clock}>
          <span>{`${date.getHours()}`} : </span>
          <span>{date.getMinutes()>9 ? `${date.getMinutes()}` : `0${date.getMinutes()}`}</span>
        </div>
      )}
      <button className={classes.clock__type__change__button} onClick={setClock}>
        {showDigital ? "Analog" : "Digital"}
      </button>
    </div>
  );
};

export default Clock;
