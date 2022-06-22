import "./App.css";
import UseState from "./components/UseState";
import React, { createContext } from "react";
import UseEffect from "./components/UseEffect";
import ComA from "./components/ComA";
import UseReducer from "./components/UseReducer";
import UseCalback from "./components/UseCalback";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import UseImperativeHandle from "./components/UseImperativeHandle";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseDebugValue from "./components/UseDebugValue";
import UseTransitionHook from "./components/UseTransitionHook";
import UseTransition from "./components/UseTransition";
import UseDefferedValue from "./components/UseDefferedValue";
import UseId from "./components/UseId";
import UseSyncExternalStore from "./components/UseSyncExternalStore";
import UseInsertionEffect from "./components/UseInsertionEffect";
const feeling = createContext();
const expect = createContext();

function App() {
  return (
    <>
      {/* <UseState  /> */}
      {/* <UseEffect /> */}

      {/* <feeling.Provider value={"fine"}>
        <expect.Provider value={"achieve goal"}>
          <ComA />
        </expect.Provider>
      </feeling.Provider> */}

      {/* <UseReducer /> */}
      {/* <UseCalback /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <UseImperativeHandle /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseDebugValue /> */}
      <UseDefferedValue />
      {/* <UseTransition /> */}
      {/* <UseId /> */}

      {/* library hooks */}
      {/* <UseSyncExternalStore /> */}
      {/* <UseInsertionEffect />   */}

      {/* <UseTransitionHook />       ----this gives error----*/}
    </>
  );
}

export default App;
export { feeling, expect };
