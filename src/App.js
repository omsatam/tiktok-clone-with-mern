import "./App.css";
import React, { useState, useEffect } from "react";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

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
