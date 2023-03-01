import './object.css';
import { useState, useEffect } from 'react';

export default function ObjectTool() {

  let [car, setCar] = useState();
  let [track, setTrack] = useState();

  useEffect(() => {
    setCar(car = document.getElementById('car'));
    car['position'] = car.offsetLeft;
    car['startPosition'] = car.offsetLeft;
    car['trackWidth'] = document.getElementById('track').offsetWidth;
    car['endPosition'] = car.offsetLeft + car.trackWidth - 100; // Subtracting 100px for the width of the 'car'
    car['moveFwd'] = () => {
      if (car.position + 20 < car.endPosition) {
        car.position += 20;
      } else {
        car.position = car.endPosition;
      }
      car.style.left = `${car.position}px`;
    };
    car['moveBk'] = () => {
      if (car.position - 20 > car.startPosition) {
        car.position -= 20;
      } else {
        car.position = car.startPosition;
      }
      car.style.left = `${car.position}px`;
    };
  }, []);

  return (
    <div className="object-container">
      <h2>Object Tool</h2>
      <div className="object-buttons">
        <label>Move The Car</label>
        <button onClick={() => {car.moveBk();}}>-</button>
        <button onClick={() => {car.moveFwd();}}>+</button>
      </div>
      <div id="track" className="track">
        <div id="car" className="car">
          <div className="ds-ft"></div>
          <div className="ds-rt"></div>
          <div className="car-body"></div>
          <div className="windshield"></div>
          <div className="roof" />
          <div className="ps-ft"></div>
          <div className="ps-rt"></div>
        </div>
      </div>
      <div className="explanation">We have created a 'car' object that tracks its position, and has the ability to move forward and backward.</div>
    </div>
  )
}