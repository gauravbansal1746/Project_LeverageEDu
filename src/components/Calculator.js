import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    // Handle button clicks and update input state
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      // Use the 'eval' function to calculate the result based on the input
      const calculatedResult = eval(input);
      setInput(calculatedResult.toString()); // Update the input with the result
    } catch (error) {
      setInput('Error'); // Display 'Error' in case of an error
    }
  };

  const handleClear = () => {
    // Clear both the input and the result
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <table>
        <tbody>
          <tr>
            <td colSpan="4">
              <input type="text" value={input} readOnly />
            </td>
          </tr>
          <tr>
            <td><button onClick={() => handleButtonClick('7')}>7</button></td>
            <td><button onClick={() => handleButtonClick('8')}>8</button></td>
            <td><button onClick={() => handleButtonClick('9')}>9</button></td>
            <td><button onClick={() => handleButtonClick('+')}>+</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleButtonClick('4')}>4</button></td>
            <td><button onClick={() => handleButtonClick('5')}>5</button></td>
            <td><button onClick={() => handleButtonClick('6')}>6</button></td>
            <td><button onClick={() => handleButtonClick('-')}>-</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleButtonClick('1')}>1</button></td>
            <td><button onClick={() => handleButtonClick('2')}>2</button></td>
            <td><button onClick={() => handleButtonClick('3')}>3</button></td>
            <td><button onClick={() => handleButtonClick('*')}>*</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleButtonClick('0')}>0</button></td>
            <td><button onClick={() => handleButtonClick('.')}>.</button></td>
            <td><button onClick={() => handleButtonClick('/')}>/</button></td>
            <td><button onClick={handleCalculate}>=</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;