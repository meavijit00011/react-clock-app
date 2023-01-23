import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import classes from "./Header.module.css";
const Header = () => {
  const ctx = useContext(AppContext);
  const changeOption = (option) => {
    ctx.changeOption(option);
  };
  let classList = {
    button1: classes.active__option,
    button2: null,
    button3: null,
  };
  if (ctx.current == "stop watch") {
    classList = {
      button1: null,
      button2: classes.active__option,
      button3: null,
    };
  } else if (ctx.current == "timer") {
    classList = {
      button1: null,
      button2: null,
      button3: classes.active__option,
    };
  }
  return (
    <div>
      <div className={classes.header__container}>React Clock App</div>
      <div className={classes.options}>
        <button
          onClick={changeOption.bind(false, "clock")}
          className={classList.button1}
        >
          Clock
        </button>
        <button
          onClick={changeOption.bind(false, "stop watch")}
          className={classList.button2}
        >
          Stop Watch
        </button>
        <button
          onClick={changeOption.bind(false, "timer")}
          className={classList.button3}
        >
          Timer
        </button>
      </div>
    </div>
  );
};

export default Header;
