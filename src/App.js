import './App.css';
import Calculator from './components/Math/calculator';
import Mathblurb from './components/Math/math-blurb';
import Assignmentblurb from './components/Assignment/assignment-blurb';

function App() {
  return (
    <div className="App">
      <div className="assignment-section">
        <h1>Variable Assignment</h1>
        <div className="presentation">
          <Assignmentblurb />
        </div>
      </div>
      <div className="math-section">
        <h1>Basic Math Operations</h1>
        <div className="presentation">
          <Calculator />
          <Mathblurb />
        </div>
      </div>
    </div>
  );
}

export default App;
