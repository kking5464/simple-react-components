import React from "react";
import "./Video.scss";

export interface VideoProps {
  embedId: string;
  videoTitle: string;
}

const Video = (props: VideoProps) => {
  return (
    <div className="video">
      <iframe 
        src={`https://www.youtube.com/embed/${props.embedId}`}
        title={props.videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>    
      </iframe>
    </div>
  );
};

export default Video;
