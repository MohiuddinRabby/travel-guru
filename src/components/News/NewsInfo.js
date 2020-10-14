import React from "react";

const NewsInfo = (props) => {
  const { title, body } = props.news;
  return (
    <div className="text-info">
      <div className="mb-3 mt-3">
        <h5 className="text-danger">{title}</h5>
        <h6>{body}</h6>
        <hr />
      </div>
    </div>
  );
};

export default NewsInfo;
