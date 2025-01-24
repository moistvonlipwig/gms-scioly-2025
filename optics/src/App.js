import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleNameSubmit = () => {
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    setIsNameSubmitted(true);
  };

  const handleQuizCompletion = (quizScore) => {
    setScore(quizScore);
  };

  return (
    <div className="App">
      <h1>Optics Quiz</h1>
      {!isNameSubmitted ? (
        <div>
          <h2>Enter your name to start:</h2>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
          />
          <button onClick={handleNameSubmit} style={{ padding: "10px 20px" }}>
            Start Quiz
          </button>
        </div>
      ) : score === null ? (
        <Quiz onComplete={handleQuizCompletion} />
      ) : (
        <Result name={name} score={score} />
      )}
    </div>
  );
}

export default App;
