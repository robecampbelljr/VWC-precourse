import useFadeInRight from "../../lib/hooks/useFadeInRight"

export default function ObjectBlurb() {

  const fadeInRight = useFadeInRight();

  return (
    <div className="blurb" ref={fadeInRight}>
      Objects are one of the basic data types in JavaScript. Objects access properties or methods through a key/value pairing system. Each 'key' is a string that allows access to the coresponding property/method. We are able to create properties, and methods to manipulate those properties. See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">MDN Objects documentation</a> for a more indepth discussion on the subject. This tool uses an object properties and methods to control the position of the 'runner'.
      <div className="small-note">See './src/components/Objects/object-tool.js' for code example</div>
    </div>
  )
}