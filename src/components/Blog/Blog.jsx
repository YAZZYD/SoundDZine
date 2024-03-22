import React from "react";
import "./Blog.css";
import { blog1, blog2, blog3 } from "../../assets/import";
function Blog() {
  const blogs = [
    {
      header: "How To Use Drum Machine in Logic Pro X",
      image: blog1,
      tag: "DAW",
    },
    { header: "How To Mix Guitars Effectively", image: blog2, tag: "Mixing" },
    {
      header: "The Real Power of Harmonies in Music Production",
      image: blog3,
      tag: "Vox",
    },
  ];

  return (
    <section id="blog" className="pink-orange">
      <div className="wrapper">
        <h2>Latest Posts</h2>
        <div className="content-container">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="tag">{blog.tag}</div>
              <a href="#">
                <img src={blog.image} />
              </a>
              <a href="#">
                <h3 className="blog-title">{blog.header}</h3>
              </a>
            </div>
          ))}
        </div>
        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
