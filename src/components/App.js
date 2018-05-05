import React from 'react';

const App = ({ number, title, day, plus, minus, asyncMinus, getJson }) => (
  <div>
    <h2>{title} {day} {number}</h2>
    <button onClick={() => plus(1)}>+</button>
    <button onClick={() => minus(1)}>-</button>
    <button onClick={() => asyncMinus(1)}>asunc -</button>
    <button onClick={() => getJson()}>getJson</button>
  </div>
);

export default App;