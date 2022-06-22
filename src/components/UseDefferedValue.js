import React, { useState } from "react";
import List from "./List";

export default function UseDefferedValue() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h1>implementation of usdeferred value hook</h1>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
}
