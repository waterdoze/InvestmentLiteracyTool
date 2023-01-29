import React, { useState } from 'react'

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState("0");
    const [operator, setOperator] = useState(null);
    const [operand, setOperand] = useState(null);

    function handleClick(e) {
        const value = e.target.value;

        if (value === "C") {
            setDisplayValue("0");
            setOperator(null);
            setOperand(null);
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
            setOperator(value);
            setOperand(displayValue);
            setDisplayValue("0");
        } else if (value === "=") {
            if (operator === "+") {
                setDisplayValue(parseFloat(operand) + parseFloat(displayValue));
            } else if (operator === "-") {
                setDisplayValue(parseFloat(operand) - parseFloat(displayValue));
            } else if (operator === "*") {
                setDisplayValue(parseFloat(operand) * parseFloat(displayValue));
            } else if (operator === "/") {
                setDisplayValue(parseFloat(operand) / parseFloat(displayValue));
            }
        } else {
            if (displayValue === "0") {
                setDisplayValue(value);
            } else {
                setDisplayValue(displayValue + value);
            }
        }
    }

    return (
        <div>
            <input type="text" value={displayValue} readOnly />
            <br />
            <button value="1" onClick={handleClick}>1</button>
            <button value="2" onClick={handleClick}>2</button>
            <button value="3" onClick={handleClick}>3</button>
            <button value="+" onClick={handleClick}>+</button>
            <br />
            <button value="4" onClick={handleClick}>4</button>
            <button value="5" onClick={handleClick}>5</button>
            <button value="6" onClick={handleClick}>6</button>
            <button value="-" onClick={handleClick}>-</button>
            <br />
            <button value="7" onClick={handleClick}>7</button>
            <button value="8" onClick={handleClick}>8</button>
            <button value="9" onClick={handleClick}>9</button>
            <button value="*" onClick={handleClick}>*</button>
            <br />
            <button value="C" onClick={handleClick}>C</button>
            <button value="0" onClick={handleClick}>0</button>
            <button value="=" onClick={handleClick}>=</button>
            <button value="/" onClick={handleClick}>/</button>
        </div>
    );
}

export default Calculator