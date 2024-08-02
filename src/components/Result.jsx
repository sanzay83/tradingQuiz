import React, { useEffect } from "react";
import "../styles/Result.scss";
import { useLocation, useNavigate } from "react-router-dom";

import image from "../assets/tradeimg.GIF";

function Result() {
  const location = useLocation();
  const { correctCount, level } = location.state;
  const navigate = useNavigate();
  console.log("correctCount:" + correctCount);
  console.log(":" + level);
  let imageSrc;
  let resultText;

  if (correctCount >= 8) {
    imageSrc = image;
    resultText = "Congratulations! You did an excellent job!";
  } else if (correctCount >= 5) {
    imageSrc = image;
    resultText = "Good effort! You did well.";
  } else {
    imageSrc = image;
    resultText = "Keep practicing to improve your score.";
  }

  useEffect(() => {
    if (localStorage.getItem("total_correct") !== undefined) {
      console.log("if");
      localStorage.setItem(
        "total_correct",
        +localStorage.getItem("total_correct") + +correctCount
      );
    } else {
      console.log("else");
      localStorage.setItem("total_correct", correctCount);
    }

    localStorage.getItem("total_attempt") !== undefined
      ? localStorage.setItem(
          "total_attempt",
          +localStorage.getItem("total_attempt") + +1
        )
      : localStorage.setItem("total_attempt", 1);
  }, []);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleRestartClick = () => {
    navigate("/quiz", { state: { level: level } });
  };

  return (
    <div className="main-container">
      <h2>Quiz Results</h2>
      <div className="result-content">
        <div className="result-text">
          <p>Correct Answers: {correctCount}</p>

          <p>Total Correct Answers: {localStorage.getItem("total_correct")}</p>
          <p>Total Attempt: {localStorage.getItem("total_attempt")}</p>
          <p>{resultText}</p>
        </div>
        <div className="result-image">
          <img src={imageSrc} alt="Result" />
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={handleHomeClick}>Return to Home</button>
        <button onClick={handleRestartClick}>Restart Quiz</button>
      </div>
    </div>
  );
}

export default Result;
