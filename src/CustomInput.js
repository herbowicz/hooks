import React, { useRef } from 'react';

const CustomInput = () => {
    const inputRef = useRef();

    function setFocusOnInput() {
        inputRef.current.focus();
        inputRef.current.value = "Current ref value"
    }

    return <div>
        <input type="text" ref={inputRef} />
        <button onClick={setFocusOnInput}>Focus</button>
    </div>;
};

export default CustomInput;