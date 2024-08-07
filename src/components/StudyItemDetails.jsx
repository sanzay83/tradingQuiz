import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../styles/Home.scss";
import "../styles/StudyDetail.scss";

function StudyItemDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  const { title, thumbnail, exampleimage, exampleimage2, description } =
    location.state;
  return (
    <div className="main-container">
      <div className="container">
        <IoMdArrowRoundBack className="exit" onClick={goback} />

        <div className="detail-title">
          <img className="card2" src={thumbnail} alt={title} />
          <h2>{title}</h2>
        </div>
        <div>
          <div className="section-title">Description</div>

          <div className="container borded-lines">{description}</div>
        </div>

        <div>
          <div className="section-title">Before</div>

          <div className="container borded-lines">
            <img src={exampleimage} alt={title} />
          </div>
        </div>
        <div>
          <div className="section-title">After</div>

          <div className="container borded-lines">
            <img src={exampleimage2} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyItemDetails;
