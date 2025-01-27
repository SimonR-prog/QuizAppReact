import './Stylings/App.css'
import { useState } from 'react';
import QuizGame from './quiz';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  function quiz() {setStartQuiz(true);}
  return (
    <>
      {startQuiz ? (
        <>
          <QuizGame />
        </>
      ) : (
        <div className="start-card">
          <h3>Click to start the game.</h3>
          <button onClick={quiz} id="start" className="start-btn btn">Start</button>
        </div>
      )}
    </>
  );
}
export default App
