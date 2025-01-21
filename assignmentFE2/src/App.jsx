import './App.css'
import { useState } from 'react';
import QuizGame from './quiz';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const quiz = () => {setStartQuiz(true);};

  return (
    <>
      {!startQuiz ? (
        <>
          <div className="start-card">
            <h3>Click to start the game.</h3>
            <button onClick={quiz} id="start" className="start-btn btn">Start</button>
          </div>
        </>
      ) : (
      <QuizGame />
      )}
    </>
  );
}
export default App
