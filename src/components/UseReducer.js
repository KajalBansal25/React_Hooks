import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log("state>>>", state);
  console.log("action", action);
  if (action.type == "INCREMENT") return state + 1;
  if (action.type == "DECREMENT") return state - 1;

  return state;
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>{state}</p>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>inc</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>dec</button>
      </div>
    </>
  );
}
