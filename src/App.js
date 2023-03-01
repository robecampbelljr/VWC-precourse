import './App.css';
import Calculator from './components/Math/calculator';
import Mathblurb from './components/Math/math-blurb';
import Assignmentblurb from './components/Assignment/assignment-blurb';
import AssignmentImage from './components/Assignment/assignment-image';
import StringBlurb from './components/Strings/string-blurg';
import StringTool from './components/Strings/string-tool';
import ConditionalLogicBlurb from './components/ConditionalLogic/conditional-logic-blurb';
import ConditionalImages from './components/ConditionalLogic/conditional-images';
import LoopBlurb from './components/Loops/loop-blurb';
import FunctionBlurb from './components/Functions/fucntion-blurb';
import ArrayBlurb from './components/Arrays/array-blurb';
import ObjectBlurb from './components/Objects/object-blurb';
import LoopTool from './components/Loops/loop-tool';
import LoopForm from './components/Loops/loop-form';
import FunctionImage from './components/Functions/function-image';
import { useState, createContext } from 'react';
import ArrayTool from './components/Arrays/array-tool';
import ObjectTool from './components/Objects/object-tool';

export const AppContext = createContext();

function App() {

  let [isOpen, setIsOpen] = useState(false);
  let [modalSelect, setModalSelect] = useState('');
  let [formIsFilled, setFormIsFilled] = useState(false);
  let [exObj, setExObj] = useState({});

  return (
    <AppContext.Provider value={{exObj, setExObj, modalSelect, setModalSelect, formIsFilled, setFormIsFilled, isOpen, setIsOpen}}>
      {/* Setting up modal for multipurpose use */}
      {isOpen ? <div className="modal">
        <LoopForm />
      </div> : null}

      <div className="App-flex">
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
          <div className="loop-section">
            <h1>Loops</h1>
            <div className="presentation">
              <LoopBlurb />
              <LoopTool />
            </div>
          </div>
          <div className="function-section">
            <h1>Functions</h1>
            <div className="presentation">
              <FunctionImage />
              <FunctionBlurb />
            </div>
          </div>
          <div className="array-section">
            <h1>Array/Array Methods</h1>
            <div className="presentation">
              <ArrayBlurb />
              <ArrayTool />
            </div>
          </div>
          <div className="object-section">
            <h1>Objects (Properties & Methods)</h1>
            <div className="presentation">
              <ObjectBlurb />
              <ObjectTool />
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
