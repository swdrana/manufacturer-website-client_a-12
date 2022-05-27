import React from "react";
import Blog from "../components/Blog";
import useBlogs from "../hooks/useBlogs";

const Blogs = () => {
  const [blogs, setBlogs] = useBlogs();
  return (
    <div className=" p-5 lg:p-10 bg-base-300">
      {blogs.map((blog) => {
        return <Blog key={blog._id} blog={blog}/>
      })}
    </div>
  );
};

export default Blogs;
