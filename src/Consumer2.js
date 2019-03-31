import React, { useContext } from "react";
import { MyContext2 } from "./Context2";

const Consumer2 = () => {
  const [count, setCount] = useContext(MyContext2);

  return (
    <>
      <div>Counter is {count}</div>
      <button onClick={() => setCount(count + 5)}>child button +5</button>
    </>
  );
};

export default Consumer2;
