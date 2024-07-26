import React, { useState, useEffect } from "react";
import "../styles/Splashscreen.scss"; // Import SCSS file for styles

function Splashscreen() {
	const loadingPhrases = [
		"Waking the Europe Markets",
		"Ringing the Wall Street Bell",
		"Borrowing from the Fed",
		"Checking if the bulls are awake",
		"Chasing after high-frequency traders",
		"Analyzing Bitcoin volatility",
		"Measuring market sentiment",
		"Trading memes on Reddit",
		"Waving goodbye to the bears",
		"Counting stock market crashes",
		"Calculating P/E ratios",
		"Hodling through the dip",
		"Buying the rumor, selling the news",
		"Selling options like a boss",
		"Stalking Elon Musk's tweets",
		"Catching falling knives",
		"Watching the ticker tape",
	];

	const [loadingText, setLoadingText] = useState(loadingPhrases[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * loadingPhrases.length);
			setLoadingText(loadingPhrases[randomIndex]);
		}, 1000); // Adjust the interval to change text every 2 seconds

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="splash-screen">
			<div className="loading-text">{loadingText}</div>
		</div>
	);
}

export default Splashscreen;
