import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import tiktok from "./tiktok.png";

function Video({ url, chanel, description, song, likes, messages, shares }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
 
  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      {/* <h1>hello i am video</h1> */}
      <img className="video__logo" src={tiktok} alt="tiktok logo" />

      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      />
      {/* VideoFooter */}
      <VideoFooter chanel={chanel} description={description} song={song} />
      {/* VideoSidebar */}
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
