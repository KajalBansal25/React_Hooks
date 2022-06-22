import React, { useState } from "react";
import useLogger from "./useLogger";

export default function Test() {
  const [name, setName] = useState("");
  useLogger(name); //custom hook always strt with use
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
