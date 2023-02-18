import React, { useState } from 'react';
import useFadeInRight from '../../lib/hooks/useFadeInRight';
import './string.css';

function StringTool() {
  const fadeInRight = useFadeInRight();
  let [char, setChar] = useState('');
  let [index, setIndex] = useState(null);

  return (
    <div className="string-tool-container" ref={fadeInRight}>
      <h2>String Tool</h2>
      <input type="text" id="string-tool-input" />
      <div className="string-index-buttons">
        <div className="index-button-row">
          <button onClick={() => { setChar(char = document.getElementById('string-tool-input').value[0]); setIndex(index = 0)}}>INDEX 0</button>
          <button onClick={() => { setChar(char = document.getElementById('string-tool-input').value[1]); setIndex(index = 1)}}>INDEX 1</button>
        </div>
        <div className="index-button-row">
          <button onClick={() => { setChar(char = document.getElementById('string-tool-input').value[2]); setIndex(index = 2)}}>INDEX 2</button>
          <button onClick={() => { setChar(char = document.getElementById('string-tool-input').value[3]); setIndex(index = 3)}}>INDEX 3</button>
        </div>
      </div>
        {char === '' ? <div className="result" /> : <div>Index {index} contains: {char}</div>}
    </div>
  )
}

export default StringTool;