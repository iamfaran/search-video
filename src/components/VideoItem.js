import React from "react";
import "./VideoItemStyle.css";

const VideoItem = (props) => {
  return (
    <div
      onClick={() => {
        props.onSelectedVideo(props.videoInfo);
      }}
      class="video-item item"
    >
      <img
        class="ui video-image"
        src={props.videoInfo.snippet.thumbnails.medium.url}
      />
      <div class="content">{props.videoInfo.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
