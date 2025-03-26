import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <div>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
      </div>
    </>
  );
};
export default Counter;
