import { useState } from "react";

export default function Calculator() {
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState('');
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const handleOperation = (operation: string) => {
        setOperation(operation);
    };
    const handleNumber1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber1(Number(e.target.value));
    };
    const handleNumber2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber2(Number(e.target.value));
    }

    const handleCalculate = () => {
        switch (operation) {
            case '+':
                setResult(number1 + number2);
                break;
            case '-':
                setResult(number1 - number2);
                break;
            case '*':
                setResult(number1 * number2);
                break;
            case '/':
                setResult(number1 / number2);
                break;
            default:
                setResult(0);
        }
    };

    const handleReset = () => {
        setResult(0);
        setOperation('');
        setNumber1(0);
        setNumber2(0);
    };

    return (
        <div className="card">
            <h2>Calculator</h2>
            <input type="number" value={number1} onChange={handleNumber1Change} />
            <button onClick={() => {handleOperation("+")}}>+</button>
            <button onClick={() => {handleOperation("-")}}>-</button>
            <button onClick={() => {handleOperation("*")}}>*</button>
            <button onClick={() => {handleOperation("/")}}>/</button>
            <input type="number" value={number2} onChange={handleNumber2Change} />
            <button onClick={handleCalculate}>=</button>
            <div>Result: {result}</div>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}