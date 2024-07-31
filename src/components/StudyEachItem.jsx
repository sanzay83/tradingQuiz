import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/StudyEachItem.scss";
import { API_URL } from "../config";
import Loader from "./Loader";

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
        const response = await axios.get(`${API_URL}/study/items/${type}`);
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [type]);

  if (loading) return <Loader />;

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
          {items.map((item, index) =>
            item.description !== "none" ? (
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
            ) : (
              <div className="card2 disabled">
                {item.title}
                <br />
                Comming Soon
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default StudyEachItem;
