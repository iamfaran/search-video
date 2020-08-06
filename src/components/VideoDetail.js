import React from "react";

const VideoDetail = (props) => {
  console.log(props.mySelectedVideo);
  if (!props.mySelectedVideo) {
    return <div>Loading</div>;
  }
  return (
    <div className="ui embed">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${props.mySelectedVideo.id.videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoDetail;
