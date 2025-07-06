import './App.css';
import { useState } from 'react';
import CounterComponent from './counterComponent';


function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    if (count === 1000) {
      alert("You have reached the maximum count of 1000!");
      setCount(0); // Reset count to 0 after reaching 1000
    }
  };

  const handleDecrement = () => {
    setCount(count - 1);
    if (count === 0) {
      alert("You cannot go below 0!");
      setCount(0); // Ensure count does not go below 0
    }
  };

  return (
    <div>
      <div>
        <h1>Click Counter App</h1>
      </div>
      <p className='count'>{count}</p>
      <CounterComponent 
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />      
    </div>
   
  )
}

export default App
