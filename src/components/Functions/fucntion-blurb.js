import useFadeInRight from "../../lib/hooks/useFadeInRight"

export default function FunctionBlurb() {
  const fadeInRight = useFadeInRight();

  return (
    <div className="blurb" ref={fadeInRight}>
      Functions define blocks of code that can then be referenced at any time. This allows us to repeat less code. Functions can take in <strong>parameters</strong> which we can then manipualte in our desired manner. When the function is invoked, we supply it with the proper arguments corresponding with its needed parameters.
    </div>
  )
}