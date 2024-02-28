// List.js
import React, { useState, useEffect } from 'react';
import '../App.css';

const List = () => {
  const [videos, setVideos] = useState([]);
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = () => {
      const storedVideos = localStorage.getItem('videoDetails');
      if (storedVideos) {
        setVideos(JSON.parse(storedVideos));
      }
    };

    fetchVideos();
  }, []);

  const handlePlay = (video) => {
    setPlayingVideo(video);
  };

  const handleDelete = (video) => {
    const updatedVideos = videos.filter((v) => v.name !== video.name);
    localStorage.setItem('videoDetails', JSON.stringify(updatedVideos));
    setVideos(updatedVideos);
    setPlayingVideo(null); // Reset playing video if deleted
  };

  return (
    <div className="list">
      <h2>Video List</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            {video.name}
            <button onClick={() => handlePlay(video)}>Play</button>
            <button onClick={() => handleDelete(video)}>Delete</button>
          </li>
        ))}
      </ul>
      {playingVideo && (
        <div className="video-player">
          <h3>Now Playing: {playingVideo.name}</h3>
          {/* Add video player here using <video> tag */}
          <video controls>
            <source src={playingVideo.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default List;
