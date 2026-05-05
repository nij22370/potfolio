import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16">
          My Latest <span className="text-cyan-400">Blogs</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <BlogCard
            image="/images/b1.jpg"
            title="Learn how to build an amazing portfolio website using next js"
          />
        </div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <BlogCard
            image="/images/b2.jpg"
            title="Learn how to build an amazing Blog website using next js"
          />
        </div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <BlogCard
            image="/images/b3.jpg"
            title="Learn how to build an amazing Social Media website using next js"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
