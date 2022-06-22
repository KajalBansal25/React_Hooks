import React, { useDebugValue, useDeferredValue, useEffect } from "react";
const useLogger = (value) => {
  useDebugValue(value);
  useEffect(() => {
    console.log(value);
  }, [value]);
};

export default useLogger;
