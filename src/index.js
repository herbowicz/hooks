import React from 'react';
import ReactDOM from 'react-dom';

import CountDown from './CountDown'
import Counter from './Counter'
import CustomInput from './CustomInput'
import Context from './Context'

const App = () => <>
    <CountDown /><hr />
    <Counter /><hr />
    <CustomInput /><hr />
    <Context /><hr />
</>;

ReactDOM.render(<App />, document.getElementById('root'));
