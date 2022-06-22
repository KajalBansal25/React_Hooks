import React, { useState, useTransition } from "react";

export default function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const LIST_SIZE = 20000;

  const handleCahnge = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };
  return (
    <>
      <h1>welcome to the implementation of usetransition hook</h1>
      <input type="text" value={input} onChange={handleCahnge} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
}
