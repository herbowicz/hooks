import React from 'react';
import ReactDOM from 'react-dom';

import CountDown from './CountDown'
import Counter from './Counter'

const App = () => <>
    <CountDown /><hr />
    <Counter /><hr />
</>;

ReactDOM.render(<App />, document.getElementById('root'));
