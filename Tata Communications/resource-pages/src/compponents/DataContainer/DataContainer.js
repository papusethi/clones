import React, { useState } from "react";
import "./DataContainer.css";
import SideMenu from "../SideMenu/SideMenu";
import VideosContainer from "../VideosContainer/VideosContainer";
import BlogPosts from "../BlogPosts/BlogPosts";
import WhitePapers from "../WhitePapers/WhitePapers";
import UpperTabMenu from "../UpperTabMenu/UpperTabMenu";

const DataContainer = () => {
  const [tab, setTab] = useState("Videos");
  const handleTabsView = (label) => {
    if (label === "Videos") {
      setTab("Videos");
    } else if (label === "Blog") {
      setTab("Blog");
    } else if (label === "News") {
      setTab("News");
    } else if (label === "White-Papers") {
      setTab("White-Papers");
    }
  };
  return (
    <div className="data-parent">
      <UpperTabMenu handleTabsView={handleTabsView} />
      <div className="data-child">
        <SideMenu />
        {tab === "Videos" ? (
          <VideosContainer />
        ) : tab === "Blog" ? (
          <BlogPosts />
        ) : tab === "News" ? (
          <BlogPosts />
        ) : tab === "White-Papers" ? (
          <WhitePapers />
        ) : null}
      </div>
    </div>
  );
};

export default DataContainer;
