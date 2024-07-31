import React, { useState, useEffect } from "react";

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

  const randomNumber = () => {
    return Math.floor(Math.random() * loadingPhrases.length);
  };

  const [loadingText, setLoadingText] = useState(
    loadingPhrases[randomNumber()]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(loadingPhrases[randomNumber()]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="loader" />
      <h1>{loadingText}</h1>
    </div>
  );
}

export default Splashscreen;
