import { useState, useContext } from 'react';
import useFadeInLeft from '../../lib/hooks/useFadeInLeft';
import './loop-tool.css';
import {AppContext} from '../../App.js';

export default function LoopTool() {

  let { isOpen, setIsOpen } = useContext(AppContext);

  let [loopToolDisplay, setLoopToolDisplay] = useState('Select a number!');
  let [explanation, setExplanation] = useState('');
  const fadeInLeft = useFadeInLeft();

  let repeater = () => {
    let num = document.getElementById('loop-num').value;

    for (let i = 1; i <= num; i++) {
      //debugger;
      if (i === 1) {
        setLoopToolDisplay(loopToolDisplay = `${i}`);
      } else {
        setLoopToolDisplay(loopToolDisplay += `${i}`);
      }

      if (i !== +num) {
        setLoopToolDisplay(loopToolDisplay += ` and `)
      } else {
        setLoopToolDisplay(loopToolDisplay += `.`);
      }
    }

    setExplanation(explanation = `This is an example of a 'for' loop. It simply counts from 1 to ${num}. It also uses conditional logic to add an ' and ' after each number, or a '.' at the end.`)
  }

  return (
    <div className="loop-tool-container" ref={fadeInLeft}>
      <h2>Loop Tool</h2>
        <h5>'For' Loop:</h5>
        <label>Select number:</label>
        <input id="loop-num" type="number" min={1} max={5}></input>
        <button onClick={() => repeater()}>Run loop</button>
        <h5>'For.in' Loop:</h5>
        <button onClick={() => setIsOpen(isOpen = true)}>Open Form</button>
        <div className="result-display">{loopToolDisplay}</div>
        <div className="explanation">{explanation}</div>
    </div>
  )
}