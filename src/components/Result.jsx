import React from "react";
import "../styles/Result.scss";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const { correctCount } = location.state;

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Correct Answers: {correctCount}</p>
    </div>
  );
}

export default Result;
