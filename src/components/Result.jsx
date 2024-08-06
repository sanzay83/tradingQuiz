import React, { useEffect } from "react";
import "../styles/Result.scss";
import "../styles/main.scss";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const { correctCount, level } = location.state;
  const navigate = useNavigate();
  console.log("correctCount:" + correctCount);
  console.log(":" + level);
  let resultText;
  const winCount = (+correctCount / 10) * 100,
    loseCount = ((10 - correctCount) / 10) * 100;

  if (correctCount >= 8) {
    resultText =
      "Congratulations! You did an excellent job! You are ready for the real world.";
  } else if (correctCount >= 5) {
    resultText =
      "Good effort! You are better than the average but you can still improve your skills";
  } else {
    resultText =
      "You preformed lower than the average. In the real markets you would have blown your account. Hit the study sections and keep practicing to improve your score.";
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
    <div className="main-container align-top">
      <h2>Trade Results</h2>
      <div className="result-content">
        <div className="result-text">
          <div className="flex-row progress">
            <div
              className="progressbar green"
              style={{ width: `${winCount}` + "%" }}
            >
              {correctCount}
            </div>
            <div
              className="progressbar red"
              style={{ width: `${loseCount}` + "%" }}
            >
              {10 - correctCount}
            </div>
          </div>
          <p>{resultText}</p>
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
