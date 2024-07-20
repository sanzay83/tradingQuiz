import React from "react";
import "../styles/Home.scss";
import image from "../assets/tradeimg.GIF";

function Home() {
  return (
    <div>
      <div className="title">Trading Quiz</div>
      <img src={image} alt="tradinggif"></img>
      <button>Beginner</button>
      <button>Expert</button>
      <button>Progress</button>
    </div>
  );
}

export default Home;
