import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../styles/Quiz.scss";
import buy from "../assets/buy.svg";
import sell from "../assets/sell.svg";
import { API_URL } from "../config";
import Loader from "./Loader";
import ProgressPagination from "./ProgressPagination";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [noOfQuestion, setNoOfQuestion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { level } = location.state;
  const [progress, setProgress] = useState(Array.from(Array(10)));

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${API_URL}/${level}/items`);
      setQuestions(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  });

  const nextQuestion = () => {
    if (noOfQuestion < questions.length - 1) {
      setNoOfQuestion(noOfQuestion + 1);
      setShowPopup(false);
    } else {
      navigate("/results", {
        state: { correctCount: correctCount, level: level },
      });
    }
  };

  const handleChoice = (choice) => {
    const currentQuestion = questions[noOfQuestion];
    if (choice === currentQuestion.buysell) {
      setCorrectCount(correctCount + 1);
      progress[noOfQuestion] = "buy";
      setProgress(progress);
    } else {
      progress[noOfQuestion] = "sell";
      setProgress(progress);
    }
    setPopupImage(currentQuestion.answer);
    setShowPopup(true);
  };

  const goback = () => {
    navigate("/");
  };

  if (loading) return <Loader />;
  if (error) return <div className="quiz-container">Error: {error}</div>;

  return (
    <div className="main-container">
      <div className="container view-size">
        <div className="exit">
          <IoMdArrowRoundBack size={"2rem"} onClick={goback} />
        </div>
        <div className="quiz-block">
          <ProgressPagination stats={progress} />
          {error && <p className="error-message">{error}</p>}
          {!showPopup ? (
            <>
              <img
                src={questions[noOfQuestion].question}
                className="level-picture"
                alt="Trading Chart"
              />
              <h1>What would you do?</h1>
              <div className="options-container">
                <img
                  alt="buy"
                  src={buy}
                  className="option-buttons buy"
                  onClick={() => handleChoice(1)}
                />
                <img
                  alt="sell"
                  src={sell}
                  className="option-buttons sell"
                  onClick={() => handleChoice(0)}
                />
              </div>
            </>
          ) : (
            <>
              <img
                src={popupImage}
                alt="Answer Chart"
                className="level-picture"
              />
              {
                //yaha pani "Answer" ko satta,
                //you thought the maerket would go up, but it went down
                //or yes, the market went up as you predicted
                //or yes, the market went down as you predicted
                // or You thought the market would go down but it went up
              }
              <h1>Answer</h1>
              <button className="next-button" onClick={nextQuestion}>
                <h1>Next</h1>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
