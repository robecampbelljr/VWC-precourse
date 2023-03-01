import React from 'react';
import useFadeInRight from '../../lib/hooks/useFadeInRight.js';

function Mathblurb() {
  const fadeInRight = useFadeInRight();

  return (
    <div className="blurb" ref={fadeInRight}>
      <h4>JavaScript is capable of basic (and complex) math functions. The basic mathmatical functions are:</h4>
      <ul>
        <li><strong>'+'</strong>: Addition combines two or more values to produce a new value.</li>
        <li><strong>'-'</strong>: Subtraction decreases a value by another value.</li>
        <li><strong>'*'</strong>: Multiplication repeats a value a certain number of times.</li>
        <li><strong>'/'</strong>: Division finds how many times a certain number fits into another number.</li>
        <li><strong>'%'</strong>: Modulo returns the remainder after dividing one number by another.</li>
        <li><strong>'**'</strong>: Exponentiation raises a number to a certain power.</li>
      </ul>
      The calculator demonstraits all of these basic functions.
      <div className="small-note">See './src/components/Math/calculator.js' for code example</div>
    </div>
  )
}

export default Mathblurb;