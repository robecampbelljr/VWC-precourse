import React from 'react';
import useFadeInRight from '../../lib/hooks/useFadeInRight';

function Mathblurb() {
  const fadeInRight = useFadeInRight();

  return (
    <div className="blurb" ref={fadeInRight}>
      <h4>JavaScript is capable of basic (and complex) math functions. The basic mathmatical functions are:</h4>
      <ul>
        <li>'+': Addition combines two or more values to produce a new value.</li>
        <li>'-': Subtraction decreases a value by another value.</li>
        <li>'*': Multiplication repeats a value a certain number of times.</li>
        <li>'/': Division finds how many times a certain number fits into another number.</li>
        <li>'%': Modulo returns the remainder after dividing one number by another.</li>
        <li>'**': Exponentiation raises a number to a certain power.</li>
      </ul>
      The calculator demonstraits all of these basic functions.

    </div>
  )
}

export default Mathblurb;