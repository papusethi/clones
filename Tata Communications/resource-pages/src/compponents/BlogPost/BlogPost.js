import React from "react";
import "./BlogPost.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import VideoWithDetail from "../VideoWithDetail/VideoWithDetail";
import BlogPostsData from "../../const/BlogPostsData";

const BlogPost = () => {
  return (
    <>
      {BlogPostsData.map((post, key) => {
        return (
          <div key={key} className="post-parent">
            <img src={post.thumbnail} alt="blog Thumbnail" />
            <p>{post.detail}</p>
            <PrimaryButton value="Read More" />
          </div>
        );
      })}
    </>
  );
};

export default BlogPost;
