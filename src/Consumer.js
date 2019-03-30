import React, { useContext } from "react";
import { MyContext } from './Context';

const Consumer = () => {
    const value = useContext(MyContext);
    return <div>{value} is from Context.</div>;
}

export default Consumer;