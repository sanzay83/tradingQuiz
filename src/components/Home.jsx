import React from "react";
import "../styles/Home.scss";
import easyimage from "../assets/easy.png";
import hardimage from "../assets/hard.png";
import { useNavigate } from "react-router-dom";
import basic_image from "../assets/principles.png";
import candle_image from "../assets/candlesticks.png";
import pattern_image from "../assets/patterns.png";
import smc_image from "../assets/smart.png";
import progress_image from "../assets/trophy.png";
import avatar_image from "../assets/avataaars.png";
import CountUp from "react-countup";

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
      status: false,
    },
    {
      title: "Candlesticks",
      type: "C",
      image: candle_image,
      status: true,
    },
    {
      title: "Patterns",
      type: "T",
      image: pattern_image,
      status: false,
    },
    {
      title: "SMC",
      type: "S",
      image: smc_image,
      status: false,
    },
  ];

  const quotes = [
    "The stock market is a wonderful place to transfer wealth from the impatient to the patient.",
    "Investing is the intersection of economics and psychology. It’s important to stay positive and keep a long-term perspective.",
    "Successful investing is about managing risk, not avoiding it.",
    "The stock market is a device for allocating capital, and it's the greatest wealth creator in history.",
    "The market is full of opportunities, and it’s up to us to seize them with optimism and a thoughtful approach.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Invest in yourself. Your career is the engine of your wealth.",
    "The stock market is a game of probabilities and possibilities. With patience and perseverance, it can be a great wealth-building tool.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The more you learn, the more you earn.",
    "An investment in knowledge pays the best interest.",
    "In investing, the more you know, the better off you’ll be.",
    "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.",
    "You don’t have to be smarter than the rest; you have to be more disciplined than the rest.",
    "The greatest wealth is to live content with little.",
    "The market is a tool, not a fortune teller.",
    "Success usually comes to those who are too busy to be looking for it.",
    "There is no wealth like knowledge, and no poverty like ignorance.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
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

  //init starting balance
  const balance = () => {
    if (localStorage.getItem("balance") === undefined) {
      localStorage.setItem("balance", 10000);
    }
  };

  balance();

  return (
    <div className="main-container align-top">
      <div className="home-container">
        <div className="header">
          <div className="header-left">
            <img src={avatar_image} className="avatar" alt="avatar" />
            <div>
              <div>Balance:</div>
              <div>
                <CountUp end={localStorage.getItem("balance")} prefix="$ " />
              </div>
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

        <div className="container borded-lines">{quotes[randomNumber()]}</div>
      </div>
      <div className="home-container">
        <div className="section-title">Test your Skills</div>
        <div className="container borded-lines two-fr">
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
        <div className="container borded-lines two-fr">
          {studyType.map((studyItem, index) =>
            studyItem.status === false ? (
              <button
                key={index}
                className={` level-container ${
                  studyItem.status ? "" : "disabled"
                } `}
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
            ) : (
              <button
                key={index}
                className={` level-container ${
                  studyItem.status ? "" : "disabled"
                } `}
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
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
