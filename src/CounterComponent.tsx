import React from "react";

interface CounterComponentProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const CounterComponent: React.FC<CounterComponentProps> = ({  onIncrement, onDecrement }) => {
   return (
    <div>
        <button onClick={onDecrement}>Decrease</button>
        <span style={{ margin: '0 20px', fontSize: '20px', fontWeight: 'bold' }}>
            
        </span>
        <button onClick={onIncrement}>Increase</button>
    </div>
   )
}

export default CounterComponent;