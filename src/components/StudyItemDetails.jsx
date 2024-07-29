import React from "react";
import { useLocation } from "react-router-dom";

function StudyItemDetails() {
  const location = useLocation();
  const { title, thumbnail, exampleimage, description } = location.state;
  return (
    <div className="main-container">
      <img src={thumbnail} alt={title} />
      <br />
      <h2>{title}</h2>
      <br />
      {description}
      <br />
      <img src={exampleimage} alt={title} />
    </div>
  );
}

export default StudyItemDetails;
