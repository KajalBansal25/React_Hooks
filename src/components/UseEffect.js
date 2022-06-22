import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [num, setNum] = useState(1);
  useEffect(() => {
    alert("hello kajal");
  }, [num]);

  return (
    <>
      <h1>number:{num}</h1>
      <button
        onClick={() => {
          setNum(num * 2);
        }}
        style={{ padding: "20px" }}
      >
        click me
      </button>
    </>
  );
}
