import { useState } from "react";

export function Counter() {
      const [count, setCount] = useState(0)
      const [increment, setIncrement] = useState(1)

    return (
    <div className="card">
        <button onClick={() => setCount((count) => count - increment)}>
            -
        </button>
        <button onClick={() => setCount((count) => count + increment)}>
            +
        </button>
        <button onClick={() => setCount(0)}>
            Reset
        </button>
        <div>
            Increment value: <input type="number" value={increment} onChange={e => setIncrement(e.target.valueAsNumber)}/>
        </div>
        <div className="card">
            count is {count}
        </div>
        
        <p>
            Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        </div>
    );
}