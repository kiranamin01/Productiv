import React from "react";
import AlbumImage from "../../assets/pyramid.png";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player bg-indigo-300 p-4 rounded-lg shadow dashboard-card-box">
      <h3 className="font-bold mb-2 text-indigo-800 text-xl font-[Poppins] flex items-center gap-2">
        🎵 Music Player
      </h3>
      <div className="music-player-box bg-white/30 backdrop-blur-sm rounded-xl p-4">
        <div className="flex flex-col items-center">
          <div
            className={`w-32 h-32 rounded-full overflow-hidden mb-4 ${
              isPlaying ? "animate-spin" : ""
            }`}
          >
            <img
              src={AlbumImage}
              alt="Album Cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-indigo-900">
              Song Title
            </h4>
            <p className="text-sm text-indigo-700">Artist Name</p>
          </div>
          <div className="w-full bg-indigo-200 rounded-full h-1 mb-4">
            <div className="bg-indigo-600 h-1 rounded-full w-1/3"></div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={handlePlayPause}
              className="p-2 hover:bg-indigo-200 rounded-full transition-colors "
            >
              <svg
                className="w-6 h-6 text-indigo-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className="p-2 hover:bg-indigo-200 rounded-full transition-colors">
              <svg
                className="w-6 h-6 text-indigo-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
