import GetData from './questions';
import './Stylings/quiz.css';
import { useState, useEffect } from "react";
import ResultScreen from "./result";

function QuizGame(){
    const [data, setData] = useState([]);
    const [showResultScreen, setShowResultScreen] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [indexId, setIndexId] = useState(0);
    const question = data[indexId]
    const [color, setColor] = useState("")


    useEffect(() => {
        const getData = async () => {
            const data = await GetData();
            setData(data);
        };
        getData();
    }, []);
    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])

    if (data.length === 0) {
        return <p>Fetching questions...</p>;
      }

    function checkAnswer(chosenAnswer) {
        if (chosenAnswer === question.answer) {
            setCorrect(correct + 1);
            setColor("green");
        } else{
            setWrong(wrong + 1);
            setColor("red");
        }
        if (indexId + 1 < data.length) {
            setIndexId(indexId + 1)
        }
        else {
            setShowResultScreen(true);
        }
    };

    return(
        <>
            {showResultScreen ? (
                <>
                    <ResultScreen correct={correct} wrong={wrong} />
                </>
            ) : (
                <>
                    <section className="quiz-card">
                        <p>{ question.question }</p>
                        <section className="results">
                            <h2>Score:</h2>
                            <ul>
                                <li><p>Correct: {correct}</p></li>
                                <li><p>Wrong: {wrong}</p></li>
                            </ul>
                        </section>
                        <section className="answers">
                        <ul className="answer-list">
                            {question.options.map((option, indexId) => (
                                <li key={indexId}>
                                    <button className="btn" onClick={() => checkAnswer(option)}>{option}
                                    </button>
                                </li>
                                ))}
                            </ul>
                        </section>
                    </section>
                </>
            )}
        </>
    );
}
export default QuizGame