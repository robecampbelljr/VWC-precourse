import useFadeInLeft from "../../lib/hooks/useFadeInLeft"

export default function LoopBlurb() {
  const fadeInLeft = useFadeInLeft();

  return (
    <div className="blurb" ref={fadeInLeft}>
      Loops allow for the running of a single block of code multiple times until a condition is met. The most common loops are:
      <ul>
        <li>
          <strong>'for'</strong>: 'for' loops repeat a block of code until a condition is met.
        </li>
        <li>
          <strong>'for...in'</strong>: 'for...in' loops are used to iterate thrugh objects and enables you to access each key and its property.
        </li>
        <li>
          <strong>'while'</strong>: 'while' loops run while a certain condition is true.
        </li>
      </ul>
      <div className="small-note">See './src/components/Loops/loop-tool.js' for code examples</div>
    </div>
  )
}