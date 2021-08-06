import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const Quiz = () => {

    const [quizzes, setQuizzes] = useState([])
    const [answers, setAnswers] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(false)

    useEffect(async () => {
        if (quizzes.length) return
        const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
        const data = await response.json()
        console.log(data)
        setQuizzes(data.results)
        setCurrentQuestion(0)
    }, [])

    const clickHandler = (val) => {
        setAnswers([...answers, quizzes[currentQuestion].correct_answer === val])
        setCurrentQuestion(currentQuestion + 1)
    }

    const renderQuizzes = () => {
        if (currentQuestion === false) {
            return (
                <h1>Upsss....</h1>
            )
        }
        if (currentQuestion === quizzes.length) {
            return (
                <>
                    <ul>
                        {
                            quizzes.map((quiz, index) => {
                                return (
                                    <li key={index}><span>{answers[index] ? '+' : '-'}</span>{quiz.question}</li>
                                )
                            })
                        }
                    </ul>

                    <Link to="/">PLAY AGAIN?</Link>
                </>


            )
        }
        return (
            <>
                <h1>{quizzes[currentQuestion].category}</h1>
                <h3>{quizzes[currentQuestion].question}</h3>
                <p>{`${currentQuestion + 1} of ${quizzes.length}`}</p>
                <button type="button" className="btn btn-success btn-sm"
                        onClick={() => {
                            clickHandler('True')
                        }}
                >True
                </button>
                <button type="button" className="btn btn-danger btn-sm"
                        onClick={() => {
                            clickHandler('False')
                        }}
                >False
                </button>
            </>
        )
    }


    return (
        <>
            {renderQuizzes()}
        </>
    )
}

export default Quiz