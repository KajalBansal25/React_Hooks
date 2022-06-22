import React, { useEffect, useLayoutEffect, useRef } from "react";

export default function UseLayoutEffect() {
  let ref = useRef("red");
  useLayoutEffect(() => {
    // window.scrollBy(0, 500);
    ref.current = "yellow";
    console.log(ref.current, "i am uselayouteffect hook");
  });
  useEffect(() => {
    console.log(ref.current, "i am useeffect");
    ref.current = "pink";
    console.log(ref.current, "useeffect");
    window.scrollBy(0, 500);
  });
  return (
    <>
      <h1>welcome to the implementation of uselayout effect</h1>
      <div style={{ height: "1000px" }}></div>
    </>
  );
}
