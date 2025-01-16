import './App.css'


function App() {
  const correctAnswer = 0;
  const wrongAnswer = 0;
  return (
    <>
      <h1>Quiz game!</h1>
      <div className="card">
        <button >Start</button>
        <p>
          Correct Answers: {correctAnswer}
        </p>
        <p>
          Wrong Answers: {wrongAnswer}
        </p>
        <div>
          <button id="option-one" className="option"></button>
          <button id="option-two" className="option"></button>
          <button id="option-three" className="option"></button>
        </div>
      </div>
    </>
  )
}

export default App
