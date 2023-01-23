import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import Clock from "./Clock";
import StopWatch from "./StopWatch";
import Timer from "./Timer";

const Content = () => {
  const ctx = useContext(AppContext);
  return (
    <div>
      {ctx.current == 'clock' &&<Clock></Clock>}
      {ctx.current == 'stop watch' && <StopWatch></StopWatch>}
      {ctx.current == 'timer' && <Timer></Timer>}
    </div>
  );
};

export default Content;
