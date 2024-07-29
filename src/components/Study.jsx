import React from "react";
import { useNavigate } from "react-router-dom";

function Study() {
  const navigate = useNavigate();
  const studyType = [
    {
      title: "Principle",
      type: "P",
    },
    {
      title: "Candlesticks ",
      type: "C",
    },
    {
      title: "Trading Patterns ",
      type: "T",
    },
    {
      title: "Smart Money COncepts",
      type: "S",
    },
  ];

  const handleButton = (studyItem) => {
    navigate("/studyEach", {
      state: { title: studyItem.title, type: studyItem.type },
    });
  };

  return (
    <div className="main-container">
      {studyType.map((studyItem, index) => (
        <button
          key={index}
          className="main-button"
          onClick={() => handleButton(studyItem)}
        >
          {studyItem.title}
        </button>
      ))}
    </div>
  );
}

export default Study;
