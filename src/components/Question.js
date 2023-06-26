import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
 
  useEffect(() => {
    const timerID = setTimeout(() => {setTimeRemaining(timeRemaining - 1)}, 1000);

    return () => clearTimeout(timerID)
  },[timeRemaining])

  function handleTimeRemaining() {
    setTimeRemaining(10)
    onAnswered(false)
  }



  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        console.log(isCorrect)
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
       <h5>{timeRemaining === 0 ? handleTimeRemaining() : timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
