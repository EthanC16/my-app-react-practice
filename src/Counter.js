import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter</h1>
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        
        <button className="counter-button" onClick={decrease}>Decrease</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increase}>Increase</button>
       
      </div>
    </div>
  );
};
export default Counter;
