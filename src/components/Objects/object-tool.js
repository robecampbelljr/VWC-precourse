import './object.css';
import { useState, useEffect } from 'react';

export default function ObjectTool() {

  let [runner, setRunner] = useState();
  let [track, setTrack] = useState();

  useEffect(() => {
    setRunner(runner = document.getElementById('runner'));
    runner['position'] = runner.offsetLeft;
    runner['startPosition'] = runner.offsetLeft;
    runner['trackWidth'] = document.getElementById('track').offsetWidth;
    runner['endPosition'] = runner.offsetLeft + runner.trackWidth - 50;
    runner['moveFwd'] = () => {
      if (runner.position + 10 < runner.endPosition) {
        runner.position += 10;
      } else {
        runner.position = runner.endPosition;
      }
      runner.style.left = `${runner.position}px`;
    };
    runner['moveBk'] = () => {
      if (runner.position - 10 > runner.startPosition) {
        runner.position -= 10;
      } else {
        runner.position = runner.startPosition;
      }

      runner.style.left = `${runner.position}px`;
    };
  }, []);

  return (
    <div className="object-container">
      <h2>Object Tool</h2>
      <div className="object-buttons">
        <label>Move The Runner</label>
        <button onClick={() => {runner.moveFwd();}}>+</button>
        <button onClick={() => {runner.moveBk();}}>-</button>
      </div>
      <div id="track" className="track">
        <div id="runner" className="runner"></div>
      </div>
      <div className="explanation">We have created a 'runner' object that tracks its position, and has the ability to move foreward and backward.</div>
    </div>
  )
}