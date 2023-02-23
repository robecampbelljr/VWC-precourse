import useFadeInRight from '../../lib/hooks/useFadeInRight';

export default function ConditionalLogicBlurb() {

  const fadeInRight = useFadeInRight();

  return (
    <div className="blurb" ref={fadeInRight}>
      Conditional logic sets parameters that must be fulfilled in order for certain code to execute. Syntactically it is accomplished by one of the two following methods:
      <ul>
        <li>
          <strong>'if(condition1)...if else(condition2)...else'</strong>: 'if(condition1)...if else(condition2)...else' statements will only execute the code within their respective block if the coresponding conditions are met.
        </li>
        <li>
          <strong>'switch'</strong>: 'switch' statements evaluate and expression and execute code coresponding to the result.
        </li>
      </ul>
    </div>
  )
}