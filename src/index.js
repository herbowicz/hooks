import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './main.css';

function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    return (
        <>
            Count: {count}
            <br />
            <br />
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                +
            </button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>
                -
            </button>
        </>
    );
}

function App() {
    return (
        <div className="App">
            <h1>React Hooks Example</h1>
            <Counter initialCount={0} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
