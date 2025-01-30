import './Stylings/index.css'
import { useState } from 'react';
import QuizGame from './quiz';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <>
      {startQuiz ? (
        <>
          <QuizGame />
        </>
      ) : (
        <div className="card card-shadow-blue">
          <h3>Click to start the game.</h3>
          <button onClick={() => setStartQuiz(true)}>Start</button>
        </div>
      )}
    </>
  );
}
export default App
