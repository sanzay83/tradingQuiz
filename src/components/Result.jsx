import React from "react";

function Result({ correctCount }) {
	return (
		<div>
			<h2>Quiz Results</h2>
			<p>Correct Answers: {correctCount}</p>
		</div>
	);
}

export default Result;
