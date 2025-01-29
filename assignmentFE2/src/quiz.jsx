import GetData from './questions';
import './Stylings/index.css'
import { useState, useEffect } from "react";
import ResultScreen from "./result";

function QuizGame(){
    const [data, setData] = useState([]);
    const [showResultScreen, setShowResultScreen] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [indexId, setIndexId] = useState(0);
    const question = data[indexId];
    const boxShadow = correct > wrong ? "card-shadow-green" : correct < wrong ? "card-shadow-red" : "card-shadow-blue";

    useEffect(() => {
        const getData = async () => {
            const data = await GetData();
            setData(data);
        };
        getData();
    }, []);

    if (data.length === 0) {
        return <h3>Fetching questions...</h3>;
    }

    function checkAnswer(chosenAnswer) {
        if (chosenAnswer === question.answer) {
            setCorrect(correct + 1);
        } 
        else{
            setWrong(wrong + 1);
        }
        if (indexId + 1 < 5) {
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
                    <section className={`card ${boxShadow}`}>
                        <section className="results">
                            <section className="result-text">
                                <h2>Score:</h2>
                            </section>
                            <section className="score">
                                <ul className="result-list">
                                    <li><p>Correct: {correct}</p></li>
                                    <li><p>Wrong: {wrong}</p></li>
                                </ul>
                            </section>
                        </section>
                        <p>{ question.question }</p>
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