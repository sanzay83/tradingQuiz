import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import buy from "../assets/buy.svg";
import sell from "../assets/sell.svg";
import "../styles/Quiz.scss";

function Quiz() {
  const navigate = useNavigate();
  const [noOfQuestion, setNoOfQuestion] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState();
  const [showNextButton, setShowNextButton] = useState(false);

  const questions = [
    {
      id: 1,
      image:
        "https://www.trade.education/wp-content/uploads/head-and-shoulders-pattern.jpg",
      answer_image:
        "https://www.trade.education/wp-content/uploads/inverse-head-and-shoulders-pattern.jpg",
      correct_answer: "buy",
    },
    {
      id: 2,
      image:
        "https://www.trade.education/wp-content/uploads/head-and-shoulders-pattern.jpg",
      answer_image:
        "https://www.trade.education/wp-content/uploads/inverse-head-and-shoulders-pattern.jpg",
      correct_answer: "buy",
    },
    {
      id: 3,
      image:
        "https://www.trade.education/wp-content/uploads/head-and-shoulders-pattern.jpg",
      answer_image:
        "https://www.trade.education/wp-content/uploads/inverse-head-and-shoulders-pattern.jpg",
      correct_answer: "buy",
    },
    {
      id: 4,
      image:
        "https://www.trade.education/wp-content/uploads/head-and-shoulders-pattern.jpg",
      answer_image:
        "https://www.trade.education/wp-content/uploads/inverse-head-and-shoulders-pattern.jpg",
      correct_answer: "buy",
    },
    {
      id: 5,
      image:
        "https://www.trade.education/wp-content/uploads/head-and-shoulders-pattern.jpg",
      answer_image:
        "https://www.trade.education/wp-content/uploads/inverse-head-and-shoulders-pattern.jpg",
      correct_answer: "buy",
    },
  ];

  const nextQuestion = () => {
    if (noOfQuestion < questions.length - 1) {
      setNoOfQuestion(noOfQuestion + 1);
      setShowPopup(false);
      setShowNextButton(false);
    } else {
      // Navigate to results page when quiz is completed
      navigate("/results", { state: { correctCount } });
    }
  };

  const handleChoice = (choice) => {
    const currentQuestion = questions[noOfQuestion];
    if (choice === currentQuestion.correct_answer) {
      setCorrectCount(correctCount + 1);
    }
    setPopupImage(currentQuestion.answer_image);
    setShowPopup(true);
    setShowNextButton(true);
  };

  return (
    <div className="quiz-container">
      {!showPopup && (
        <>
          <p>{`${noOfQuestion + 1} / ${questions.length}`}</p>
          <img
            src={questions[noOfQuestion].image}
            height="100px"
            width="100px"
            className="level-picture"
            alt="Trading Chart"
          />
          <p className="text">What would you do?</p>
          <div className="options-container">
            <img
              alt="buy"
              src={buy}
              className="option-buttons buy"
              onClick={() => handleChoice("buy")}
            />
            <img
              alt="sell"
              src={sell}
              className="option-buttons sell"
              onClick={() => handleChoice("sell")}
            />
          </div>
        </>
      )}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <img src={popupImage} alt="Answer Chart" className="answer-image" />
            {showNextButton && (
              <button className="next-button" onClick={nextQuestion}>
                Next chart
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
