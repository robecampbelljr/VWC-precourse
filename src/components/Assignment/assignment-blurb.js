import useFadeInLeft from "../../lib/hooks/useFadeInLeft";

function Assignmentblurb() {

  const fadeInLeft = useFadeInLeft();

  return(
    <>
      <div className='blurb' ref={fadeInLeft}>
        <h4>To <strong>declare</strong> a variable is to create a container in memory to which we can then <strong>assign</strong> a value. A value can be a
        basic (i.e. string) or complex (i.e. Array) data type. These values can later be referenced, manipulated, or reassigned throughout the code. In JavaScript there are three ways of declaring a variable:</h4>
        <ul>
          <li><strong>var</strong>:  Variables declared with 'var' are function-scoped meaning the variable is <a href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting">hoisted</a> to the top of the function. This allows access to the variable before it is defined.</li>
          <li><strong>let</strong>: Variables declared with 'let' are block-scoped meaning they are <strong>NOT</strong> <a href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting">hoisted</a>. Thus are only available within the block in which they were declared.</li>
          <li><strong>const</strong>: Variables declared with 'const' are also block-scoped. Const varibales cannot be changed after they have been declared. Note: If the 'const' variable is an object or an array, its properties or elements can still be modified.</li>
        </ul>
      </div>
    </>
  )
}

export default Assignmentblurb;
