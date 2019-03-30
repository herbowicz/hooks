import React, { createContext } from "react";
import Consumer from './Consumer'

export const MyContext = createContext();

function Context() {
    return (
        <MyContext.Provider value={"My value"}>
            <Consumer />
        </MyContext.Provider>
    );
}


export default Context;