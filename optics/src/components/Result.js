import React from "react";

const Result = ({ name, score }) => {
  return (
    <div>
      <h2>Congratulations, {name}!</h2>
      <p>Your final score is: {score}</p>
    </div>
  );
};

export default Result;

