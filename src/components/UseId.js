import React, { useId } from "react";

export default function UseId() {
  const id = useId();

  return (
    <>
      {/* For multiple IDs in the same component, append a suffix using the same id: */}

      <h1>welcome to the implementation of useid</h1>
      <div>
        <label htmlFor={id + "-firstName"}>First Name</label>
        <div>
          <input id={id + "-firstName"} type="text" />
        </div>
        <label htmlFor={id + "-lastName"}>Last Name</label>
        <div>
          <input id={id + "-lastName"} type="text" />
        </div>
        <div>
          <label htmlFor={id}>Do you like React?</label>
          <input id={id} type="checkbox" name="react" />
        </div>
      </div>
    </>
  );
}
