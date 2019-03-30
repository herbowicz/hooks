import React, { createContext, useState } from "react";
import Consumer2 from "./Consumer2";

export const MyContext2 = createContext(0, () => {});

function Context2() {
  const [count, setCount] = useState(0);

  return (
    <MyContext2.Provider value={[count, setCount]}>
      <Consumer2 />
      <button onClick={() => setCount(count + 1)}>parent button +1</button>
    </MyContext2.Provider>
  );
}

export default Context2;
