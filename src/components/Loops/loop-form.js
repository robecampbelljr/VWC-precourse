import './loop-tool.css';
import { useContext } from 'react';
import { AppContext } from '../../App.js';

export default function LoopForm() {

  let { formIsFilled, setFormIsFilled, exObj, setExObj, isOpen, setIsOpen } = useContext(AppContext);

  let makeExObj = () => {
    let k1 = document.getElementById('key1').value;
    let k2 = document.getElementById('key2').value;
    let v1 = document.getElementById('value1').value;
    let v2 = document.getElementById('value2').value;

    exObj[k1] = v1;
    exObj[k2] = v2;
    setFormIsFilled(formIsFilled = true);
    setIsOpen(isOpen = false);
  }

  return (
    <div className="form-container">
      <div className="header">
        <h2>Object Creation</h2>
        <button className="close" onClick={() => setIsOpen(isOpen = false)}>X</button>
      </div>
      <h5>Key/Value Pairs</h5>
      <div className="explanation">Objects use key/value pairs to store information. We can referene these values or <strong>properties</strong> by referncing the <strong>key</strong> associated with the property. Let's create a simple object!</div>
      <div className="inputs">
        <div className="input-keys">
          <label>Key 1:</label>
          <input id="key1" type="text" placeholder="firstName"></input>
          <label>Key 2:</label>
          <input id="key2" type="text" placeholder="lastName"></input>
        </div>
        <div className="input-values">
          <label>Value 1:</label>
          <input id="value1" type="text" placeholder="Joe"></input>
          <label>Value 2:</label>
          <input id="value2" type="text" placeholder="Smith"></input>
        </div>
      </div>
      <button onClick={() => makeExObj()}>Create Object</button>
    </div>
  )
}