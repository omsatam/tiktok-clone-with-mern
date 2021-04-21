import "./App.css";
import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  console.log(videos);

  return (
    <div className="app">
      {/* <h1>Hey this is a tiktok clone</h1> */}
      <div className="app__videos">
        {videos.map(
          ({ url, chanel, description, song, likes, shares, messages }) => (
            <Video
              url={url}
              chanel={chanel}
              description={description}
              likes={likes}
              shares={shares}
              song={song}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
