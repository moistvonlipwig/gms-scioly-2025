import React, { useState } from "react";
import quizData from "../data/quiz-data.json";

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedOption) => {
    const correctAnswer = quizData.questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(score + (selectedOption === correctAnswer ? 1 : 0));
    }
  };

  return (
    <div>
      <h2>{quizData.title}</h2>
      <p>
        Question {currentQuestion + 1}/{quizData.questions.length}
      </p>
      <p>{quizData.questions[currentQuestion].question}</p>
      <div>
        {quizData.questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            style={{
              display: "block",
              margin: "10px auto",
              padding: "10px",
              width: "200px",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;

