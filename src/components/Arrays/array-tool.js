import useFadeInRight from '../../lib/hooks/useFadeInRight';
import './array-tool.css';

export default function ArrayTool() {

  const fadeInRight = useFadeInRight();

  return (
    <div className="array-tool-container" ref={fadeInRight}>
      <h2>Array Tool</h2>
    </div>
  )
}