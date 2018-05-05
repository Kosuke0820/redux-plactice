import React from 'react';

const App = ({ number, title, day, plus, minus, asyncMinus }) => (
  <div>
    <h2>{title} {day} {number}</h2>
    <button onClick={() => plus(1)}>+</button>
    <button onClick={() => minus(1)}>-</button>
    <button onClick={() => asyncMinus(1)}>asunc -</button>
  </div>
);

export default App;