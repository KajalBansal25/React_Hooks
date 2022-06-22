import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const getItems = useCallback(
    (num) => {
      console.log(countTwo + num, countTwo - num);
      for (let i = 0; i < 1000000; i++) {}
      console.log("getItems");

      return [countTwo + 1, countTwo - 1];
    },
    [countTwo]
  );

  return (
    <>
      <h1>hi kajal</h1>
      <button
        style={{ padding: "20px" }}
        onClick={() => setCountOne(countOne + 1)}
      >
        CountOne
      </button>
      <button
        style={{ padding: "20px" }}
        onClick={() => setCountTwo(countTwo + 1)}
      >
        countTwo
      </button>

      <Child getItems={getItems} />
    </>
  );
}
