import React from "react";
import "../styles/Result.scss";
import { useLocation, useNavigate } from "react-router-dom";

import image from "../assets/tradeimg.GIF";

function Result() {
	const location = useLocation();
	const { correctCount } = location.state.correctcount;
	const { level } = location.state.difficulty;
	const navigate = useNavigate();
	console.log(level);
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

	const handleHomeClick = () => {
		navigate("/");
	};

	const handleRestartClick = () => {
		navigate("/quiz", { state: { level: level } });
	};

	return (
		<div className="result-container">
			<h2>Quiz Results</h2>
			<div className="result-content">
				<div className="result-text">
					<p>Correct Answers: {correctCount}</p>
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
