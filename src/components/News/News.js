import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import NewsInfo from "./NewsInfo";

const News = () => {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setNews(data.slice(0, 10)));
    setLoadingNews(false);
  }, []);
  return (
    <div className="container">
      <h3 className="text-info">All News</h3>
      <hr />
      {loadingNews ? (
        <div className="py-5">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <h5 className="py-4 text-danger">Loading News</h5>
        </div>
      ) : (
        news.map((news) => <NewsInfo key={news.id} news={news}></NewsInfo>)
      )}
    </div>
  );
};

export default News;
