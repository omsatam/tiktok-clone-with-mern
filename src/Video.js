import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import tiktok from "./tiktok.png";

function Video({ url, chanel, description, song, likes, messages, shares }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  //1. description :Flying low through palm trees and down towards a tropical beach. Lombok, Indonesia.
  //title: Flying Through Palm Trees Along Beach
  //chanel: videvo
  // ocean: https://cdn.videvo.net/videvo_files/video/free/2017-08/small_watermarked/170724_15_Setangibeach_preview.webm

  //2. Sunset At Venice Beach LA
  //Sun setting on the ocean at Venice Beach, LA.
  // sunset: https://cdn.videvo.net/videvo_files/video/free/2019-01/small_watermarked/181015_13_Venice%20Beach%20Drone_25_preview.webm

  //3.
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
