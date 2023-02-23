import useFadeInLeft from "../../lib/hooks/useFadeInLeft"

export default function ArrayBlurb() {

  const fadeInLeft = useFadeInLeft();

  return (
    <div className="blurb" ref={fadeInLeft}>
      Arrays are a complex data type that allow for the storage and manipulation of varios types of data. Syntacticly we create an array in javascript by encompassing the data around square-brackets ([]), with each piece of data being separated by a comma (,). Arrays also have a wide varaiety of methods available for accessing and processing the data inside. Some of the most common are:
      <ul>
        <li>
          <strong>'.forEach((element, index, array) => callBack)'</strong>: '.forEach((element, index, array) => callBack)' steps through the array (much like the for loop above), and applies the callBack to the current element.
        </li>
        <li>
          <strong>'.map((value) => callBack)'</strong>: '.map((value) => {})' returns an array of the results of the callBack function applied to each element.
        </li>
      </ul>
    </div>
  )
}