import React, { useState, useEffect } from "react";
import NewSingle from "./NewSingle";
import Error from "./Error";

const News = ({ news }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://newsapi.org/v2/${news.type}?${news.query}&apiKey=e4922320902e4ac693248a71181af89b`;
        const response = await fetch(url);
        const data = await response.json();
        setItems(data.articles);
      } catch (error) {
        setError(true);
        console.log(error);
      }

      console.log(items);
    };

    fetchData();
  }, [items]);

  if (!error) {
    return (
      <div>
        <div className="row">
          {items.map((item) => (
            <NewSingle key={item.url} item={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Error />;
  }
};

export default News;
