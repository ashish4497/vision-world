import './App.css';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  increment, decrement, incrementByAmount, selectCount } from './slice/counterSlice';
import HeroPage from './screens/heroPage';



function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="counter">
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
      </header>
      <HeroPage/>
    </div>
  );
}

export default App;

