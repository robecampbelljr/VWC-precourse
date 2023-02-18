import React from 'react';
import useFadeInLeft from '../../lib/hooks/useFadeInLeft';

function StringBlurb() {

  const fadeInLeft = useFadeInLeft();

  return (
    <div className="blurb" ref={fadeInLeft}><p></p>A string is a series of carachters contained withing a set of single ('') or double ("") quotes. A string is 0 indexed. This means that we can access any character within a string by using that characters index.<p>Strigns have a plethora of methods availabe to perform operations on that string. Some of the most popular are:</p>
      <ul>
        <li><strong>'.length'</strong>: '.length' returns the length of the string including spaces.</li>
        <li><strong>'.slice(start, end)'</strong>: '.slice(start, end)' returns a portion of the string starting at the index 'start' and ends (but does NOT include) the index 'end'.</li>
        <li><strong>'.split(separater)'</strong>: '.split(separator)' splits the string by the 'separator' and returns an array with each portion at a different index.</li>
      </ul>
      There are many more <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string methods</a> available.
    </div>
  )
}

export default StringBlurb;