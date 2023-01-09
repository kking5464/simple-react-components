import React from "react";
import "./BasicVideo.scss";

export interface BasicVideoProps {
  embedId: string;
  videoTitle?: string;
  autoplay?: string;
  languagePreference?: string;
  controls?: string;
  ccLoad?: string;
  ccPref?: string;
}

const BasicVideo = (props: BasicVideoProps) => {  
  // NOTE: autoplay is guaranteed to work if the video is also muted; otherwise, behavior is not guranteed
  const mute = props.autoplay === '1' ? '1' : '0'
  let videoSource: string = `https://www.youtube.com/embed/${props.embedId}?controls=${props.controls}&cc_lang_pref=${props.ccPref}&cc_load_policy=${props.ccLoad}&autoplay=${props.autoplay}&mute=${mute}`;

  return (
    <div className="basic-video">
      <iframe
        src={videoSource}
        title={props.videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        >
      </iframe>
    </div>
  );
};

export default BasicVideo;