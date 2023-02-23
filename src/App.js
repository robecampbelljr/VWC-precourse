import './App.css';
import Calculator from './components/Math/calculator';
import Mathblurb from './components/Math/math-blurb';
import Assignmentblurb from './components/Assignment/assignment-blurb';
import AssignmentImage from './components/Assignment/assignment-image';
import StringBlurb from './components/Strings/string-blurg';
import StringTool from './components/Strings/string-tool';
import ConditionalLogicBlurb from './components/ConditionalLogic/conditional-logic-blurb';
import ConditionalImages from './components/ConditionalLogic/conditional-images';

function App() {

  return (
    <div className="App">
      <div className="assignment-section">
        <h1>Variable Assignment</h1>
        <div className="presentation">
          <Assignmentblurb />
          <AssignmentImage />
        </div>
      </div>
      <div className="math-section">
        <h1>Basic Math Operations</h1>
        <div className="presentation">
          <Calculator />
          <Mathblurb />
        </div>
      </div>
      <div className="string-section">
        <h1>String/String Methods</h1>
        <div className="presentation">
          <StringBlurb />
          <StringTool />
        </div>
      </div>
      <div className="conditional-section">
        <h1>Conditional Logic</h1>
        <div className="presentation">
          <ConditionalImages />
          <ConditionalLogicBlurb />
        </div>
      </div>
    </div>
  );
}

export default App;
