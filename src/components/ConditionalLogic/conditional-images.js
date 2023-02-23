import useFadeInLeft from '../../lib/hooks/useFadeInLeft';
import ifthenImg from '../../pics/ifthen.png';
import switchImg from '../../pics/switch.png';

export default function ConditionalImages() {
  const fadeInLeft = useFadeInLeft();

  return (
    <div className="multi-image-container" ref={fadeInLeft}>
      <img src={ifthenImg} alt="If/Then Example" />
      <img src={switchImg} alt="Switch Example" />
    </div>
  )
}