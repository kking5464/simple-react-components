import React from "react";
import "./Video.scss";

export interface VideoProps {
  videoType: string;
  embedId: string;
  videoTitle: string;
}

const Video = (props: VideoProps) => {
  let videoSource: string = `https://www.youtube.com/embed/${props.embedId}`;

  if (props.videoType === 'vimeo') {
    videoSource = `https://player.vimeo.com/video/${props.embedId}`;
  }

  return (
    <div className="video">
      <iframe
        src={videoSource}
        title={props.videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default Video;