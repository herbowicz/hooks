import React, { useContext } from "react";
import { MyContext3 } from "./Context3";

const Consumer3 = () => {
  const [val, [count, setCount]] = useContext(MyContext3);

  return (
    <div>
      {val} is from Context3 (map)
      <div>Counter is {count} (dispatch)</div>
      <button onClick={() => setCount(count + 5)}>child button +5</button>
    </div>
  );
};

export default Consumer3;
