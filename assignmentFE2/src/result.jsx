import { useEffect, useState } from "react"
import QuizGame from "./quiz";
import './result.css'

function ResultScreen({wrong, correct}) {
    const [startQuiz, setStartQuiz] = useState(false);
    function quiz(){ setStartQuiz(true);};
    const [result, setResult] = useState("");

    useEffect(() => {
        if (wrong < correct) {
            setResult("Winner!");
        }
        else {
            setResult("Loser..");
        }
    }, [wrong, correct])
    

    return (
        <>
            {startQuiz ? (
                <>
                    <QuizGame />
                </>
            ) : (   
                <>
                    <section className="result-card">
                        <h3> {result} </h3>
                        <button onClick={quiz}>Go again?</button>
                    </section>
                </>
            )}
        </>
    );
}

export default ResultScreen