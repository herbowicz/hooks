import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return <div>Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(i => i + 1)}>+</button>
        <button onClick={() => setCount(i => i - 1)}>-</button>
    </div>;
};

export default Counter;