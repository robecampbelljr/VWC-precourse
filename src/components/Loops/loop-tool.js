import { useState, useContext } from 'react';
import useFadeInTop from '../../lib/hooks/useFadeInTop';
import './loop-tool.css';
import { AppContext } from '../../App.js';
import useFadeInRight from '../../lib/hooks/useFadeInRight';

export default function LoopTool() {

  let { exObj, modalSelect, setModalSelect, formIsFilled, setFormIsFilled, isOpen, setIsOpen } = useContext(AppContext);

  let [loopToolDisplay, setLoopToolDisplay] = useState('Select a number!');
  let [explanation, setExplanation] = useState('');
  const fadeInRight = useFadeInRight();
  const fadeInTop = useFadeInTop();

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

  let getKeys = () => {
    let keyList = Object.keys(exObj);
    let firstKey = keyList[0];
    let lastKey = keyList[keyList.length - 1];

    for (let key in exObj) {
      if (key === firstKey) {
        setLoopToolDisplay(loopToolDisplay = `${key}`)
      } else {
        setLoopToolDisplay(loopToolDisplay += `${key}`)
      }

      if (key === lastKey) {
        setLoopToolDisplay(loopToolDisplay += `.`)
      } else {
        setLoopToolDisplay(loopToolDisplay += ` and `)
      }
    }

    setExplanation(explanation = `This button uses a 'for.in' loop to retrieve and print the values you provided.`)
  }

  let getValues = () => {
    let keyList = Object.keys(exObj);
    let firstKey = keyList[0];
    let lastKey = keyList[keyList.length - 1];

    for (let key in exObj) {
      if (key === firstKey) {
        setLoopToolDisplay(loopToolDisplay = `${exObj[key]}`)
      } else {
        setLoopToolDisplay(loopToolDisplay += `${exObj[key]}`)
      }

      if (key === lastKey) {
        setLoopToolDisplay(loopToolDisplay += `.`)
      } else {
        setLoopToolDisplay(loopToolDisplay += ` and `)
      }
    }

    setExplanation(explanation = `This button uses a 'for.in' loop to retrieve and print the keys you provided.`)
  }

  return (
    <div className="loop-tool-container" ref={fadeInRight}>
      <h2>Loop Tool</h2>
        <h5>'For' Loop:</h5>
        <label>Select number:</label>
        <input id="loop-num" type="number" min={1} max={5}></input>
        <button onClick={() => repeater()}>Run loop</button>
        <h5>'For.in' Loop:</h5>
        {formIsFilled ? <><button onClick={() => getKeys()}>Get Keys</button><button onClick={() => getValues()}>Get Values</button></> : null}
        <button onClick={() => {setIsOpen(isOpen = true); setModalSelect(modalSelect = 'loopForm')}}>Open Form</button>
        <div className="result-display">{loopToolDisplay}</div>
        {explanation !== '' ? <div className="explanation" ref={fadeInTop}>{explanation}</div> : null}
    </div>
  )
}