import React from "react";
import { useLocation } from "react-router-dom";

import "../styles/Home.scss";
import "../styles/StudyDetail.scss";

function StudyItemDetails() {
  const location = useLocation();
  const { title, thumbnail, exampleimage, exampleimage2, description } =
    location.state;
  return (
    <div className="main-container">
      <div className="detail-title">
        <img className="card2" src={thumbnail} alt={title} />
        <h2>{title}</h2>
      </div>
      <div>
        <div className="section-title">Description</div>

        <div className="container">{description}</div>
      </div>

      <div>
        <div className="section-title">Before</div>

        <div className="container">
          <img src={exampleimage} alt={title} />
        </div>
      </div>
      <div>
        <div className="section-title">After</div>

        <div className="container">
          <img src={exampleimage2} alt={title} />
        </div>
      </div>
    </div>
  );
}

export default StudyItemDetails;
