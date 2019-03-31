import React from "react";
import ReactDOM from "react-dom";

import CountDown from "./CountDown";
import Counter from "./Counter";
import CustomInput from "./CustomInput";
import Fetch from "./Fetch";
import Context from "./Context";
import Context2 from "./Context2";
import Context3 from "./Context3";

const App = () => (
  <>
    <CountDown />
    <hr />
    <Counter />
    <hr />
    <CustomInput />
    <hr />
    <Fetch />
    <hr />
    <Context />
    <hr />
    <Context2 />
    <hr />
    <Context3 />
    <hr />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
