import React from "react";
import "./BasicVideo.scss";

export interface BasicVideoProps {
  embedId: string;
  videoTitle?: string;
  controls?: string;
  autoplay?: string;
  ccLanguagePreference?: string;
  ccLoad?: string;
}

const BasicVideo = (props: BasicVideoProps) => {  
  const controls = props.controls ? props.controls : '1'
  const autoplay = props.autoplay ? props.autoplay : '0'
  const mute = props.autoplay === '1' ? '1' : '0'
  const ccLanguagePreference = props.ccLanguagePreference ? props.ccLanguagePreference : 'en'
  const hl = props.ccLanguagePreference ? props.ccLanguagePreference : 'en'
  const ccLoad = props.ccLoad ? props.ccLoad : '0'

  let videoSource: string = `https://www.youtube.com/embed/${props.embedId}?controls=${controls}&autoplay=${autoplay}&mute=${mute}&cc_lang_pref=${ccLanguagePreference}&hl=${hl}&cc_load_policy=${ccLoad}`;

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