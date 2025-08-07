import { useState } from 'react';

export default function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);
  const [val, setVal] = useState(1);

  function increment() {
    setCount((count) => count + val);
  }

  function decrement() {
    setCount((count) => count - val);
  }
    
  function reset() {
    setCount(initialValue); // reset to the initial value
  }

  return { count, increment, val, setVal, reset, decrement };
}
