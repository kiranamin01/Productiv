import React, { useState, useEffect } from "react";
import YTPlayer from "./musicplayer/YTPlayer";

const MusicPlayer = () => {
  const [ytLink, setYtLink] = useState(() => {
    const savedLink = localStorage.getItem("musicPlayerLink");
    return savedLink || "https://youtu.be/t8OZPJfpcTM?si=DHl_yhq6pvBGuWU-";
  });

  useEffect(() => {
    localStorage.setItem("musicPlayerLink", ytLink);
  }, [ytLink]);

  const ytvideoId = ytLink.includes("youtu.be/")
    ? ytLink.split("youtu.be/")[1].split("?")[0]
    : ytLink.includes("youtube.com/watch")
    ? new URL(ytLink).searchParams.get("v")
    : ytLink;

  return (
    <>
      <div className="music-player bg-indigo-300 p-4 rounded-lg shadow dashboard-card-box">
        <div className="header flex justify-between items-center">
          <h3 className="font-bold mb-2 text-indigo-800 text-xl font-[Poppins] flex items-center gap-2">
            🎵 Music Player
          </h3>
        </div>
        <YTPlayer videoId={ytvideoId} />
      </div>
    </>
  );
};

export default MusicPlayer;
