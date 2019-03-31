import React, { useContext } from "react";
import { MyContext } from "./Context";

const Consumer = () => {
  const val = useContext(MyContext);
  return <div>{val} is from Context.</div>;
};

export default Consumer;
