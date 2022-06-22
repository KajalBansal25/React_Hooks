import React, { forwardRef, useImperativeHandle, useState } from "react";

const ChildC = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({ increment }));

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      count:{count}
      <button style={{ padding: "20px" }} onClick={increment}>
        inc through child
      </button>
    </>
  );
});
export default ChildC;
