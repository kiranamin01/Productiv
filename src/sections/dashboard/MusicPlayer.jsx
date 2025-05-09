import React from "react";
import YTPlayer from "./musicplayer/YTPlayer";

const MusicPlayer = () => {
  let ytLink = "https://youtu.be/t8OZPJfpcTM?si=DHl_yhq6pvBGuWU-";
  const ytvideoId = ytLink.slice(17);
  return (
    <>
      <div className="music-player bg-indigo-300 p-4 rounded-lg shadow dashboard-card-box">
        <h3 className="font-bold mb-2 text-indigo-800 text-xl font-[Poppins] flex items-center gap-2">
          🎵 Music Player
        </h3>
        <YTPlayer videoId={ytvideoId} />
      </div>
    </>
  );
};

export default MusicPlayer;
