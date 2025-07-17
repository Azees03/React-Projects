import { useState } from 'react';
import './App.css';
function App() {
  const [count,setCount]=useState(5);
  function decrementCount(){
    setCount(prevCount=>prevCount-1)
  }
  function incrementCount(){
    setCount(prevCount=>prevCount+1)
  }
  return (
    <div className="App">
      <h1>Simple Counter App</h1>
      <h2 onClick={decrementCount}>-</h2>
      <h2>{count}</h2>
      <h2 onClick={incrementCount}>+</h2>
    </div>
  );
}

export default App;
