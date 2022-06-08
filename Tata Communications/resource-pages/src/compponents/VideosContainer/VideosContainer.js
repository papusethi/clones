import React from "react";
import "./VideosContainer.css";
import VideoWithDetail from "../VideoWithDetail/VideoWithDetail";
import PaginatorComponent from "../Paginator/PaginatorComponent";

const VideosContainer = () => {
  return (
    <div className="videocontanier-parent">
      <VideoWithDetail />
      {/* <PaginatorComponent /> */}
    </div>
  );
};

export default VideosContainer;
