import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function StudyEachItem() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { type } = location.state;

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      {items.map((item) => (
        <>
          ID:{item.id}
          <br />
          Title: {item.title}
          <br />
          <img height={"100px"} src={item.thumbnail} alt="img" />
          <br />
          <img height={"100px"} src={item.exampleimage} alt="img" />
          <br />
          Description: {item.description}
          <br />
          Type: {item.type}
        </>
      ))}
    </div>
  );
}

export default StudyEachItem;
