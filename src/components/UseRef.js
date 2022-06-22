import React, { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null);

  const handleRef = () => {
    console.log(inputRef);
    inputRef.current.focus();
    console.log("entered text in input:", inputRef.current.value);
    inputRef.current.style.color = "blue";
    inputRef.current.style.display = "none";
  };
  return (
    <>
      <h1>implementation of useref</h1>
      <input ref={inputRef} />
      <button style={{ padding: "20px" }} onClick={handleRef}>
        click me
      </button>
    </>
  );
}
