import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const isEven = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <>
      <h1>welcome to the implementation of usememo</h1>
      <button
        onClick={() => {
          setCountOne(countOne + 1);
        }}
      >
        countOne:{countOne}
      </button>
      <button
        onClick={() => {
          setCountTwo(countTwo - 1);
        }}
      >
        countTwo:{countTwo}
      </button>
      {isEven ? "even" : "odd"}
    </>
  );
}
