import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/StudyEachItem.scss";

function StudyEachItem() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { title, type } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tqbackend.aapugu.com/study/items/${type}`
        );
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [type]);

  if (loading) return <div className="loader" />;

  if (error) {
    return <p>{error}</p>;
  }

  const handleButtonClick = (item) => {
    navigate("/studyitemdetails", {
      state: {
        title: item.title,
        thumbnail: item.thumbnail,
        exampleimage: item.exampleimage,
        description: item.description,
        type: item.type,
        id: item.id,
      },
    });
  };

  return (
    <>
      <div className="main-container">
        <h1>{title}</h1>
        <div className="each-item">
          {items.map((item, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleButtonClick(item)}
            >
              <div className="card2">
                <img src={item.thumbnail} alt="img" />
                <br />
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StudyEachItem;
