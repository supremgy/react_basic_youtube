import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_llst";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCtez6NC88J0WBK5Bv3wI3V9LZb0aMIYiY",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
