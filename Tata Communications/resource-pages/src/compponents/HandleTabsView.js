import React from "react";
import VideosContainer from "../compponents/VideosContainer/VideosContainer";
import BlogPosts from "../compponents/BlogPosts/BlogPosts";
import WhitePapers from "../compponents/WhitePapers/WhitePapers";

const HandleTabsView = (label) => {
  if (label === "videos") {
    return <VideosContainer />;
  } else if (label === "blog") {
    return <BlogPosts />;
  } else if (label === "news") {
    return <h1>News</h1>;
  } else if (label === "white papers") {
    return <WhitePapers />;
  }
};

export default HandleTabsView;
