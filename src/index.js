import React from 'react';
import ReactDOM from 'react-dom';

import CountDown from './CountDown'
import Counter from './Counter'
import CustomInput from './CustomInput'
import Context from './Context'
import Fetch from './Fetch'

const App = () => <>
    <CountDown /><hr />
    <Counter /><hr />
    <CustomInput /><hr />
    <Context /><hr />
    <Fetch /><hr />
</>;

ReactDOM.render(<App />, document.getElementById('root'));
