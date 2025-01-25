import GetData from './questions';
import './quiz.css'
import RnGenerator from "./Rng";
import { useState } from "react";

//Need a function that will compare the correct answer with the answer of the users click.
//If answer === click -> increase wins etc. Can return a true/false and use an if return true ++ on wins if false ++ on loss..

// function CorrectAnswer(){
//     const correctAnswer = ;

//     if (correctAnswer === ){
//         setCorrect
//     }
// }

function QuizGame(){
    const arrayOfIds = RnGenerator();

    const data = GetData();
    console.log(data);

    var [correct, setCorrect] = useState(0);
    var [wrong, setWrong] = useState(0);

    return(
        <>
            <div className="quiz-card">
                <h2>Question</h2>
                <section className="result">
                    <ul className="result-list">
                        <li><p>Correct answers: {correct} </p></li>
                        <li><p>Wrong answers: {wrong} </p></li>
                    </ul>
                </section>
                <section className="answers">
                    <ul className="answer-list">
                        <li><button id="option-one" className="btn">Placeholder</button></li>
                        <li><button id="option-two" className="btn">Placeholder</button></li>
                        <li><button id="option-three" className="btn">Placeholder</button></li>
                    </ul>
                </section>
            </div>
        </>
    )
}
export default QuizGame