import React from "react";
import "../styles/Home.scss";
import image from "../assets/tradeimg.GIF";
import easyimage from "../assets/easy.png";
import hardimage from "../assets/hard.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const levels = [
    {
      image: easyimage,
      title: "Beginner",
      desc: "For those who are just starting out",
      click: "easy",
    },
    {
      image: hardimage,
      title: "Expert",
      desc: "Read the charts like the back of their hand",
      click: "hard",
    },
    {
      image: "study",
      title: "Study Material",
      desc: "Read about the charts and candles",
      click: "study",
    },
  ];

  const handleButton = (item) => {
    if (item.click === "study") {
      navigate("/study");
    } else {
      navigate("/quiz", { state: { level: item.click } });
    }
  };

  return (
    <div className="main-container">
      <div className="title">Trading Quiz</div>
      <div className="bb">
        <img src={image} className="level-picture" alt="tradinggif" />
        {levels.map((item, index) => (
          <button
            key={index}
            className="level-container"
            onClick={() => handleButton(item)}
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
              <div className="description">{item.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
