import useFadeInRight from '../../lib/hooks/useFadeInRight';
import { useState } from 'react';
import './array-tool.css';

export default function ArrayTool() {

  let [result, setResult] = useState('');
  let [explanation, setExplanation] = useState('');
  const fadeInRight = useFadeInRight();

  let mapMyRide = () => {
    let nums = [document.getElementById('num1').value, document.getElementById('num2').value, document.getElementById('num3').value];

    setResult(result = JSON.stringify(nums.map((num) => {return +num + 2})));
    setExplanation(explanation = `When .map() is used on an array, it returns an array of the results of a call-back function being applied to each item in the array. As you can see, an array has been returned where we added '2' to '${nums[0]}', '${nums[1]}', and '${nums[2]}'.`)
  }

  let forEachHisOwn = () => {
    let nums = [document.getElementById('num1').value, document.getElementById('num2').value, document.getElementById('num3').value];

    setResult(result = `After adding '3' to '${nums[0]}', '${nums[1]}', and '${nums[2]}' we get `);
    nums.forEach((num, index) => {
      if (index !== nums.length - 1) {
        setResult(result += `'${+num + 3}', `);
      } else {
        setResult(result += `and '${+num + 3}'.`);
      }
    });

    setExplanation(explanation = `.forEach(), unlike .map(), does NOT return ANYTHING. It simply applies a call-back function to each element in the array. Here, we use .forEach() to concatinate a string with '${nums[0]}', '${nums[1]}', and '${nums[2]}' that we displayed above.`)
  }

  return (
    <div className="array-tool-container" ref={fadeInRight}>
      <h2>Array Tool</h2>
      <label>
        Give me three numbers:
      </label>
      <div className="array-row">
        <input type="number" id="num1" min={1} max={10} />
        <input type="number" min={1} id="num2" max={10} />
        <input type="number" min={1} id="num3" max={10} />
      </div>
      <div className="array-row">
        <button onClick={() => {mapMyRide()}}>.map()</button>
        <button onClick={() => {forEachHisOwn()}}>.forEach()</button>
      </div>
      {result !== '' ? <div className="result"><strong>Result:</strong> {result}</div> : <div className="result"></div>}
      {explanation !== '' ? <div className="explanation">{explanation}</div> : null}
    </div>
  )
}