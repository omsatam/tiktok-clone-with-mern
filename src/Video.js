import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

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
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://instagram.fbom22-1.fna.fbcdn.net/v/t50.2886-16/169043200_288583709598965_997202850636791518_n.mp4?_nc_ht=instagram.fbom22-1.fna.fbcdn.net&amp;_nc_cat=105&amp;_nc_ohc=aOBTAj7TGkoAX94ESVc&amp;edm=APfKNqwBAAAA&amp;ccb=7-4&amp;oe=6080D446&amp;oh=5f9cecf5c0ea7018b8996f1d54862db1&amp;_nc_sid=74f7ba"
      />
      {/* VideoFooter */}
      <VideoFooter chanel={chanel} description={description} song={song} />
      {/* VideoSidebar */}
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
