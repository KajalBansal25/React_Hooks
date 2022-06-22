import React, { useState } from "react";
import Normal from "./Normal";

export default function UseTransitionHook() {
  const Buttons = {
    NORMAL: "Normal",
    USE_TRANSITION: "useTransition",
    USE_DEFERRED: "useDeferred",
  };
  const [button, setButton] = useState(Buttons.NORMAL);
  const renderedInputs=()=>{
      if(button===Buttons.NORMAL)
      return <Normal />
      if(button===Buttons.USE_TRANSITION)
      return "usetransition"
      if(button===Buttons.USE_DEFERRED)
      return "usdeferred"
  }

  return (
    <>
      <h1>implementation of usetransition hook</h1>
      <h4>{button}</h4>
      <button
        style={{ padding: "20px" }}
        onClick={() => setButton(Buttons.NORMAL)}
      >
        {Buttons.NORMAL}
      </button>
      <button
        style={{ padding: "20px" }}
        onClick={() => setButton(Buttons.USE_TRANSITION)}
      >
        {Buttons.USE_TRANSITION}
      </button>
      <button
        style={{ padding: "20px" }}
        onClick={() => setButton(Buttons.USE_DEFERRED)}
      >
        {Buttons.USE_DEFERRED}
      </button>
  <div>{renderedInputs()}</div> 
      
    </>
  );
}
