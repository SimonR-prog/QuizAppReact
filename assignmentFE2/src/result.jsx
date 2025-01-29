import { useEffect, useState } from "react"
import QuizGame from "./quiz";
import './Stylings/index.css'

function ResultScreen({wrong, correct}) {
    const [startQuiz, setStartQuiz] = useState(false);
    function quiz(){ setStartQuiz(true);};
    const [result, setResult] = useState("");
    const [points, setPoints] = useState("");
    const [boxShadow, setBoxShadow] = useState("")

    useEffect(() => {
        if (wrong < correct) {
            setResult("Winner!");
            setPoints(`${correct} correct answers out of 5!`)
            setBoxShadow("card-shadow-green")
        }
        else {
            setResult("Loser..");
            setPoints(`You guess wrong ${wrong} times.`)
            setBoxShadow("card-shadow-red")
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
                    <section className={`card ${boxShadow}`}>
                        <h2> {result} </h2>
                        <p>{points}</p>
                        <button className="btn" onClick={quiz}>Go again?</button>
                    </section>
                </>
            )}
        </>
    );
}

export default ResultScreen