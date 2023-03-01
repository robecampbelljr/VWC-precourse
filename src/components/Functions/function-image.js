import functionImg from '../../pics/function.png';
import useFadeInLeft from '../../lib/hooks/useFadeInLeft';

export default function FunctionImage() {

  const fadeInLeft = useFadeInLeft();

  return (
    <img src={functionImg} ref={fadeInLeft} alt="Exampe of a function block of code." />
  )
}