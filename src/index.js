import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Clock = () => {
    const [currentCount, setCount] = useState(10);
    const timer = () => setCount(currentCount - 1);

    useEffect(
        () => {
            if (currentCount <= 0) {
                return;
            }
            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
        },
        [currentCount]
    );

    return <div>{currentCount}</div>;
};

const App = () => <Clock />;

ReactDOM.render(<App />, document.getElementById('root'));
