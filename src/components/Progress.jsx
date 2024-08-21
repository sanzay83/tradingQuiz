import React, { useState, useEffect } from "react";
import "../styles/Home.scss";
import "../styles/Progress.scss";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import low_image from "../assets/low.png";
import mid_image from "../assets/mid.png";
import high_image from "../assets/high.png";

function Progress() {
  let total_attempts = +localStorage.getItem("total_attempt") * 10;
  let total_correct = localStorage.getItem("total_correct");
  let win_percent = (total_correct / total_attempts) * 100;

  const [pastTrades, setPastTrades] = useState([]);
  const [trades, setTrades] = useState("easyTrades");
  const navigate = useNavigate();
  const goback = () => {
    navigate("/");
  };

  useEffect(() => {
    const attempts = JSON.parse(localStorage.getItem(trades));
    setPastTrades(attempts);
    console.log(trades);
  }, [trades]);

  return (
    <div className="main-container align-top">
      <div className="container">
        <div className="exit">
          <IoMdArrowRoundBack size={"2rem"} onClick={goback} />
        </div>
        {pastTrades === null ? (
          <p>
            You have not taken any trades yet. Your progress stats will be
            available after you complete some trades.
          </p>
        ) : (
          <>
            <div className="achievements">
              <img
                className={`achievement ${
                  win_percent < 45 ? "" : "grayscale"
                } `}
                src={low_image}
                alt="achievement-first"
              />
              <img
                className={`achievement ${
                  win_percent > 45 && win_percent < 75 ? "" : "grayscale"
                } `}
                src={mid_image}
                alt="achievement-second"
              />
              <img
                className={`achievement ${
                  win_percent > 75 ? "" : "grayscale"
                } `}
                src={high_image}
                alt="achievement-third"
              />
            </div>
            <div className="row-container progress">
              <div
                style={{ width: `${win_percent}%` }}
                className="progressbar green ontop"
              >
                <div className="progressbar-text">{total_correct}</div>
              </div>
              <div className="progressbar red">
                <div className="progressbar-text">
                  {total_attempts - total_correct}
                </div>
              </div>
            </div>
            <p>
              {`Out of ${total_attempts} trades, you managed to get ${total_correct}
            trades right. That leaves you with a win percentage of
            ${Math.round(win_percent * 100) / 100}%`}
            </p>
            <div className="grid two-fr">
              <button
                onClick={() => {
                  setTrades("easyTrades");
                }}
              >
                Easy
              </button>
              <button
                onClick={() => {
                  setTrades("hardTrades");
                }}
              >
                hard
              </button>
            </div>
            <div className="row-container progress">
              <div>#</div>
              <div>Wins</div>
              <div>Losses</div>
              <div>Win %</div>
              <div>Result</div>
            </div>
            {pastTrades.map((correctCount, index) => {
              return (
                <div key={index} className="row-container progress">
                  <div>{index + 1}</div>
                  <div>{correctCount}</div>
                  <div>{10 - correctCount}</div>
                  <div>{`${correctCount * 10}%`}</div>
                  <div>
                    {trades === "easyTrades"
                      ? -1000
                      : -2000 + correctCount * 100}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Progress;
