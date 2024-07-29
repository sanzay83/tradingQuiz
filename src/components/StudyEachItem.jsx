import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import "../styles/StudyEachItem.scss";

function StudyEachItem() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { title, type } = location.state;
  //console.log(studyItem);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/study/items/${type}`
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

  if (loading) return <Loader />;

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="main-container">
        <h1>{title}</h1>
        <div className="each-item">
          {items.map((item) => (
            <div className="card">
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
