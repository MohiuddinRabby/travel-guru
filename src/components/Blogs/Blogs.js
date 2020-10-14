import React, { useEffect, useState } from "react";
import BlogsInfo from "./BlogsInfo";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data.slice(0, 5));
      });
  }, []);
  return (
    <div className="container text-danger">
      <h3 className="text-info">Blogs</h3>
      <hr />
      {blogs.map((blog) => (
        <BlogsInfo key={blog.id} blog={blog}></BlogsInfo>
      ))}
    </div>
  );
};

export default Blogs;
