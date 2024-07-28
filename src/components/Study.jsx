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

  const handleButton = (item) => {
    navigate("/studyEach", { state: { type: item.type } });
  };

  return (
    <div>
      {studyType.map((item, index) => (
        <button
          key={index}
          className="main-button"
          onClick={() => handleButton(item)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

export default Study;
