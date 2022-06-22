import React, { useRef } from "react";
import ChildC from "./ChildC";

export default function ParentC() {
  const ref = useRef();
  return (
    <>
      <ChildC ref={ref} />
      <button
        style={{ padding: "20px" }}
        onClick={() => ref.current.increment()}
      >
        inc by parent
      </button>
    </>
  );
}
