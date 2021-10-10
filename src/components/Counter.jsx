import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState(1);

    return(
        <div>
            <h1 data-testid="header">My Counter</h1>
            <h2 data-testid="counter" className={counter >= 100 ? "green" : counter <= -100 ? "red" : ""}>{counter}</h2>

            <button data-testid="add-btn" onClick={() => setCounter(prevState => prevState + parseInt(input))}>+</button>
            <input data-testid="input" type="number" value={input} onChange={e => {setInput(e.target.value)}}/>
            <button data-testid="minus-btn" onClick={() => setCounter(prevState => prevState - parseInt(input))}>-</button>
        </div>
    )
}

export default Counter;