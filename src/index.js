import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Countdown = ({ from }) => {
    const [count, setCount] = useState(from);
    const countdown = () => setCount(count - 1);

    useEffect(
        () => {
            if (count <= 0) {
                return;
            }
            const id = setTimeout(countdown, 1000);
            return () => clearTimeout(id);
        },
        [count]
    );

    return (
        <>
            {count === 0 ? (
                <h2>Time's up!</h2>
            ) : (
                <p>Counting down {count} seconds...</p>
            )}
        </>
    );
};

const App = () => <Countdown from="10" />;

ReactDOM.render(<App />, document.getElementById('root'));
