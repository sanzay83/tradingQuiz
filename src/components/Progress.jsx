import React from "react";
import "../styles/Home.scss";
import "../styles/Progress.scss";

function Progress() {
  let total_attempts = +localStorage.getItem("total_attempt") * 10;
  let total_correct = localStorage.getItem("total_correct");
  let conditional_text = (total_correct / total_attempts) * 100 + "%";

  return (
    <div className="main-container">
      <div className="row-container avatar">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="row-container progress">
        <div width={conditional_text} className="progressbar green">
          {total_correct}
        </div>
        <div className="progressbar red">{total_attempts}</div>
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
