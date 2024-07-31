import React from "react";
import "../styles/Home.scss";
import image from "../assets/tradeimg.GIF";
import easyimage from "../assets/easy.png";
import hardimage from "../assets/hard.png";
import studyimage from "../assets/study.png";
import { useNavigate } from "react-router-dom";
import basic_image from "../assets/principles.png";
import candle_image from "../assets/candlesticks.png";
import pattern_image from "../assets/patterns.png";
import smc_image from "../assets/smart.png";
import progress_image from "../assets/trophy.png";
import avatar_image from "../assets/avataaars.png";

function Home() {
  const navigate = useNavigate();
  const levels = [
    {
      image: easyimage,
      title: "Beginner",
      click: "easy",
    },
    {
      image: hardimage,
      title: "Expert",
      click: "hard",
    },
  ];
  const studyType = [
    {
      title: "Principle",
      type: "P",
      image: basic_image,
    },
    {
      title: "Candlesticks",
      type: "C",
      image: candle_image,
    },
    {
      title: "Patterns",
      type: "T",
      image: pattern_image,
    },
    {
      title: "SMC",
      type: "S",
      image: smc_image,
    },
  ];

  const quotes = [
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
    return Math.floor(Math.random() * quotes.length);
  };

  const handleQuizButton = (item) => {
    if (item.click === "study") {
      navigate("/study");
    } else {
      navigate("/quiz", { state: { level: item.click } });
    }
  };

  const handleStudyButton = (studyItem) => {
    navigate("/studyEach", {
      state: { title: studyItem.title, type: studyItem.type },
    });
  };

  const handleProgress = () => {
    navigate("/progress");
  };

  return (
    <div className="main-container">
      <div className="home-container">
        <div className="header">
          <div className="header-left">
            <img src={avatar_image} className="avatar" alt="avatar" />
            <div>
              <div>Welcome,</div>
              <strong>Trader</strong>
            </div>
          </div>
          <div>
            <img
              src={progress_image}
              className="avatar"
              alt="progress"
              onClick={() => handleProgress()}
            />
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className="section-title">Quote of the day</div>

        <div className="container">{quotes[randomNumber()]}</div>
      </div>
      <div className="home-container">
        <div className="section-title">Test your Skills</div>
        <div className="container">
          {levels.map((item, index) => (
            <button
              key={index}
              className="level-container"
              onClick={() => handleQuizButton(item)}
            >
              <div className="imageholder">
                <img
                  src={item.image}
                  className="level-picture"
                  alt="tradinggif"
                />
              </div>
              <div className="textholder">
                <div className="title">{item.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="home-container">
        <div className="section-title">Grow Your Knowledge</div>
        <div className="container">
          {studyType.map((studyItem, index) => (
            <button
              key={index}
              className="level-container"
              onClick={() => handleStudyButton(studyItem)}
            >
              <div className="imageholder">
                <img
                  src={studyItem.image}
                  className="level-picture"
                  alt="tradinggif"
                />
              </div>
              <div className="textholder">
                <div className="title">{studyItem.title}</div>
                <div className="description">{studyItem.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
