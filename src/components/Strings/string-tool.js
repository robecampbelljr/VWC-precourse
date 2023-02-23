import React, { useState } from 'react';
import useFadeInRight from '../../lib/hooks/useFadeInRight';
import './string.css';

function StringTool() {
  const fadeInRight = useFadeInRight();
  let [char, setChar] = useState('');
  let [index, setIndex] = useState(null);
  let [methodResult, setMethodResult] = useState('');

  return (
    <div className="string-tool-container" ref={fadeInRight}>
      <h2>String Tool</h2>
      <label>Enter a word or phrase:</label>
      <input type="text" id="string-tool-input" />
      <div className="string-index-buttons">
        <div className="button-row">
          <button onClick={() => { setChar(char = document.getElementById('string-tool-input').value[0]); setIndex(index = 0)}}>INDEX 0</button>
          <button onClick={() => { setChar(char = document.getElementById('string-tool-input').value[1]); setIndex(index = 1)}}>INDEX 1</button>
        </div>
        <div className="button-row">
          <button onClick={() => { setChar(char = document.getElementById('string-tool-input').value[2]); setIndex(index = 2)}}>INDEX 2</button>
          <button onClick={() => { setChar(char = document.getElementById('string-tool-input').value[3]); setIndex(index = 3)}}>INDEX 3</button>
        </div>
      </div>
      <div className="result">
        Result: {char === '' ? null : `Index ${index} contains: ${char}`}
      </div>
      <h3>Methods</h3>
      <div className="button-row">
        <button onClick={() => {
          setMethodResult(methodResult = `Length: ${document.getElementById('string-tool-input').value.length}`);
        }}>.length</button>
        <div className="slice-box">
          <div className="start-bundle">
            <label>Start</label>
            <input type="text" id="slice-start"></input>
          </div>
          <button onClick={() => {
            setMethodResult(methodResult = `Sliced String: ${document.getElementById('string-tool-input').value.slice(+document.getElementById('slice-start').value, +document.getElementById('slice-end').value)}`);
          }}>.slice(start, end)</button>
          <div className="end-bundle">
            <label>End</label>
            <input type="text" id="slice-end"></input>
          </div>
        </div>
        <div className="split-section">
          <label>Splitter</label>
          <input type="text" id="splitter"></input>
          <button onClick={() => {
            setMethodResult(methodResult = `Split: ${JSON.stringify(document.getElementById('string-tool-input').value.split(document.getElementById('splitter').value))}`);
          }}>.split(splitter)</button>
        </div>
      </div>
      {methodResult.length <= 0 ? null : <div className="result">
        Method Result: {methodResult}
      </div>}
    </div>
  )
}

export default StringTool;