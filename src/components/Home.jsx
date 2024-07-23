import React from "react";
import "../styles/Home.scss";
import image from "../assets/tradeimg.GIF";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const levels = [
    {
      image: "imagelink",
      title: "Beginner",
      desc: "For those who are just starting out",
      click: "easy",
    },
    {
      image: "imagelink",
      title: "Expert",
      desc: "Read the charts like the back of their hand",
      click: "hard",
    },
  ];

  const handleButton = (item) => {
    navigate("/quiz", { state: { level: item.click } });
  };

  return (
    <div className="home-container">
      <div className="title">Trading Quiz</div>
      <div className="bb">
        <img src={image} className="level-picture" alt="tradinggif" />
        {levels.map((item, index) => (
          <button
            key={index}
            className="level-container"
            onClick={() => handleButton(item)}
          >
            <div className="imaheholder"></div>
            <div className="textholder">
              <div className="title">{item.title}</div>
              <div className="description">{item.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
