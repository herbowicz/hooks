import React, { createContext, useState } from "react";
import Consumer3 from "./Consumer3";

export const MyContext3 = createContext();

function Context3() {
  const [count, setCount] = useState(0);

  return (
    <MyContext3.Provider value={["My value", [count, setCount]]}>
      <Consumer3 />
    </MyContext3.Provider>
  );
}

export default Context3;
