import React from "react";

const BlogsInfo = (props) => {
  const { thumbnailUrl } = props.blog;
  return (
    <div className="media">
      <img src={thumbnailUrl} className="align-self-start mr-3 pb-2" alt="..." />
      <div className="media-body">
        <p>
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
          leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>
      </div>
    </div>
  );
};

export default BlogsInfo;
