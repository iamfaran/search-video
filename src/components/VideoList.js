import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const result = props.data.map((item) => {
    return (
      <VideoItem onSelectedVideo={props.onSelectedVideo} videoInfo={item} />
    );
  });
  return <div className="ui divided list">{result}</div>;
};

export default VideoList;
