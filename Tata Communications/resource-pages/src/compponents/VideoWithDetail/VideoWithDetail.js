import React from "react";
import "./VideoWithDetail.css";
import videos from "../../const/VideodData";
const VideoWithDetail = () => {
  return (
    <>
      {videos.map((video, key) => {
        return (
          <div key={key} className="video-parent">
            <img
              style={{ position: "absolute" }}
              src={video.thumbnail}
              alt="Video Thumbnail"
            />
            <video>
              <source src={video.url} />
            </video>
            <p>{video.detail}</p>
          </div>
        );
      })}
    </>
  );
};

export default VideoWithDetail;
