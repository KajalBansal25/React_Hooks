import React, { useContext } from "react";
import { feeling } from "../App";

export default function ComC() {
  const feel = useContext(feeling);
  return (
    <>
      <h1>hello kajal g!!!</h1>
      <h2>{feel}</h2>
    </>
  );
}
