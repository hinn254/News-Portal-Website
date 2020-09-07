import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleSide from "./SingleSide";
import Error from "./Error";

const SideNews = ({ news }) => {
  const [sNews, setSnews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://newsapi.org/v2/${news.type}?${news.query}&apiKey=e4922320902e4ac693248a71181af89b`;
        const response = await axios.get(url);
        // const data = await response.json();
        setSnews(response.data.articles);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };

    fetchData();
  }, [news.query, news.type, sNews]);
  if (!error) {
    return (
      <div>
        <div>
          {sNews.map((item) => (
            <SingleSide key={item.url} item={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Error />;
  }
};

export default SideNews;
