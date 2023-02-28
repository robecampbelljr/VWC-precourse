import './calc.css';
import React, { useState } from 'react';
import { exponent, multiplication, division, addition, subtraction, modulo } from '../../lib/calc-lib';
import useFadeInLeft from '../../lib/hooks/useFadeInLeft';

/*
  addition button (Line 46) is currently concatenating strings and NOT adding numbers. This is on the bug list
*/

function Calculator() {
  let [buttons, setButtons] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let [firstNum, setFirstNum] = useState();
  let [secondNum, setSecondNum] = useState();
  let [calcDisplay, setCalcDisplay] = useState('');
  const fadeInLeft = useFadeInLeft();


  let addNumToDisplay = (num) => {
    setCalcDisplay(calcDisplay += num);
    document.getElementById('calc-area').innerHTML = calcDisplay;
  };

  let addSymbolToDisplay = (symbol) => {
    setFirstNum(firstNum = +calcDisplay);
    setCalcDisplay(calcDisplay += `\n${symbol}\n`);
    document.getElementById('calc-area').innerHTML = calcDisplay;
  };

  let clearDisplay = () => {
    setCalcDisplay(calcDisplay = '');
    document.getElementById('calc-area').innerHTML = calcDisplay;
  }

  let submit = () => {
    let mathSymbol = calcDisplay.split(`\n`)[1]
    let solution;
    setSecondNum(secondNum = calcDisplay.split(`\n`)[2]);

    if (mathSymbol === '**') {
      solution = exponent(firstNum, secondNum);
    } else if (mathSymbol === '*') {
      solution = multiplication(firstNum, secondNum);
    } else if (mathSymbol === '/') {
      solution = division(firstNum, secondNum);
    } else if (mathSymbol === '+') {
      solution = addition(firstNum, secondNum);
    } else if (mathSymbol === '-') {
      solution = subtraction(firstNum, secondNum);
    } else if (mathSymbol === '%') {
      solution = modulo(firstNum, secondNum);
    }

    setCalcDisplay(calcDisplay = '');
    document.getElementById('calc-area').innerHTML = solution;

  }

  return (
    <div className="calc-contaier" ref={fadeInLeft}>
      <h2>JavaScript Calculator</h2>
      <textarea className="calc-area" id="calc-area">{calcDisplay}</textarea>
        <div className="calculator">
          <div className="button-container">
            <div className="button-row">
              <div className="button" onClick={() => { addNumToDisplay(1); }}>{buttons[1]}</div>
              <div className="button" onClick={() => { addNumToDisplay(2); }}>{buttons[2]}</div>
              <div className="button" onClick={() => { addNumToDisplay(3); }}>{buttons[3]}</div>
            </div>
            <div className="button-row">
              <div className="button" onClick={() => { addNumToDisplay(4); }}>{buttons[4]}</div>
              <div className="button" onClick={() => { addNumToDisplay(5); }}>{buttons[5]}</div>
              <div className="button" onClick={() => { addNumToDisplay(6); }}>{buttons[6]}</div>
            </div>
            <div className="button-row">
              <div className="button" onClick={() => { addNumToDisplay(7); }}>{buttons[7]}</div>
              <div className="button" onClick={() => { addNumToDisplay(8); }}>{buttons[8]}</div>
              <div className="button" onClick={() => { addNumToDisplay(9); }}>{buttons[9]}</div>
            </div>
            <div className="button-row">
              <div className="button" onClick={() => { addNumToDisplay(0); }}>{buttons[0]}</div>
              <div className="button" onClick={() => { submit(); }}>=</div>
            </div>
            <div className="button-row">
              <div className="button" onClick={() => { clearDisplay(); }}>AC</div>
            </div>
          </div>
          <div className="button-column">
            <div className="button" onClick={() => { addSymbolToDisplay('**') }}>**</div>
            <div className="button" onClick={() => { addSymbolToDisplay('*') }}>*</div>
            <div className="button" onClick={() => { addSymbolToDisplay('/') }}>/</div>
            <div className="button" onClick={() => { addSymbolToDisplay('+') }}>+</div>
            <div className="button" onClick={() => { addSymbolToDisplay('-') }}>-</div>
            <div className="button" onClick={() => { addSymbolToDisplay('%') }}>%</div>
          </div>
        </div>
    </div>
  );
}

export default Calculator;