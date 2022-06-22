import React, { useContext } from "react";
import ComC from "./ComC";
import { expect } from "../App";

export default function ComB() {
  const expectation = useContext(expect);
  return (
    <>
      <h1>{expectation} of rendering of component b</h1>
      <ComC />
    </>
  );
}
