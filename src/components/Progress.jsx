import React from "react";
import "../styles/Home.scss";
import "../styles/Progress.scss";

import low_image from "../assets/low.png";
import mid_image from "../assets/mid.png";
import high_image from "../assets/high.png";

function Progress() {
  let total_attempts = +localStorage.getItem("total_attempt") * 10;
  let total_correct = localStorage.getItem("total_correct");
  let win_percent = (total_correct / total_attempts) * 100;
  let conditional_text = (total_correct / total_attempts) * 100 + "%";

  return (
    <div className="main-container">
      <div className="achievements row-container">
        <img
          className={`achievement ${win_percent < 45 ? "" : "grayscale"} `}
          src={low_image}
        />
        <img
          className={`achievement ${
            win_percent > 45 && win_percent < 75 ? "" : "grayscale"
          } `}
          src={mid_image}
        />
        <img
          className={`achievement ${win_percent > 75 ? "" : "grayscale"} `}
          src={high_image}
        />
      </div>
      <div className="row-container progress">
        <div
          style={{ width: `${win_percent}` + "%" }}
          className="progressbar green"
        >
          {total_correct}
        </div>
        <div className="progressbar red">{total_attempts - total_correct}</div>
      </div>
      <p>
        Out of {total_attempts} trades, you managed to get {total_correct}{" "}
        trades right. That leaves you with a win percentage of{" "}
        {(total_correct / total_attempts) * 100}%
      </p>
      <p>{conditional_text}</p>
    </div>
  );
}

export default Progress;
