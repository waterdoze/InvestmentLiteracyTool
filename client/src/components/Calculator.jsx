import React, { useState } from 'react'

const Calculator = () => {
    const [inputs, setInputs] = useState([])
    const [isIRA, setIsIRA] = useState(true)
    const [instructions, setInstructions] = useState(["Please input your current IRA balance", "How much would you like to contribute each year?", "Now your current age?", "And your marginal tax rate is?"]);
    const [instructionsMorgage, setInstructionsMortgage] = useState(["Please input your starting balance", "Now input your annual contribution", "Now your current age", "And your marginal tax rate is"]);

    const doMathIRA = () => {
        let result = parseFloat(inputs[0])
        let perYear = parseFloat(inputs[1])
        let age = parseInt(inputs[2])
        let tax = parseFloat(inputs[3])

        for (let i = 0; i < 65 - age; i++) {
            result += perYear
            result *= 1.07
        }

        let resultFormatted = (Math.round(result * 100) / 100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        setInstructions([`If you were to retire at the age of 65, your Roth IRA balance could potentially be ${resultFormatted}$`])
        console.log(result)
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && inputs.length <= 3) {
            setInputs([...inputs, e.target.value]);
            e.target.value = "";
            if (inputs.length < 3) {
                setInstructions((instructions) => instructions.filter((_, index) => index !== 0));
            }

            else {
                doMathIRA()
            }
        }
    }

    return (
        <div id="App">
            <div className='calc-input'>
                <h2>{instructions[0]}</h2>
                <input className="buy-sell" type="text" onKeyPress={handleKeyPress} />
            </div>

            <br />
            <div>{inputs.length}</div>

        </div>
    );
}

export default Calculator