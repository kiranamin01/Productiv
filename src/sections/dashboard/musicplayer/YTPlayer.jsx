import React, { useState, useCallback } from "react";
import YouTube from "react-youtube";
import { MdHideImage } from "react-icons/md";

import MusicWave from "./MusicWave.jsx";

const YTPlayer = ({ videoId: initialVideoId }) => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoId, setVideoId] = useState(initialVideoId);
  const [inputValue, setInputValue] = useState("");
  const [hideOverlay, setHideOverlay] = useState(false);

  const onReady = useCallback((event) => {
    setPlayer(event.target);
    setDuration(event.target.getDuration());
  }, []);

  const handlePlayPause = useCallback(() => {
    if (player) {
      isPlaying ? player.pauseVideo() : player.playVideo();
      setIsPlaying(!isPlaying);
    }
  }, [player, isPlaying]);

  const handleForward = useCallback(() => {
    if (player) {
      player.seekTo(player.getCurrentTime() + 5, true);
    }
  }, [player]);

  const handleBackward = useCallback(() => {
    if (player) {
      player.seekTo(player.getCurrentTime() - 5, true);
    }
  }, [player]);

  const handleProgressChange = useCallback(
    (event) => {
      const currentTime = event.target.getCurrentTime();
      setProgress(currentTime / duration);
    },
    [duration]
  );

  const handleSeek = useCallback(
    (event) => {
      const seekTime = duration * parseFloat(event.target.value);
      if (player) {
        player.seekTo(seekTime, true);
      }
    },
    [duration, player]
  );

  const opts = {
    height: "300",
    width: "500",
    playerVars: {
      autoplay: 0,
      controls: 1, // Always show controls
      showinfo: 0,
      rel: 0,
      modestbranding: true,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Extract video ID from various YouTube URL formats
    let newVideoId = inputValue.trim();

    // Handle full YouTube URLs
    const urlPatterns = {
      standard:
        /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i,
      short: /^[a-zA-Z0-9_-]{11}$/,
      share: /youtu\.be\/([^"&?/\s]{11})/i,
    };

    // Try matching with different patterns
    let match = null;
    for (const [type, pattern] of Object.entries(urlPatterns)) {
      match = newVideoId.match(pattern);
      if (match) {
        newVideoId = type === "short" ? newVideoId : match[1];
        break;
      }
    }

    if (match) {
      // Reset player state
      if (player) {
        player.pauseVideo();
      }
      setVideoId(newVideoId);
      setInputValue("");
      setIsPlaying(false);
      setProgress(0);
    } else {
      alert("Please enter a valid YouTube video URL or ID");
    }
  };

  const handleHideOverlay = () => {
    setHideOverlay(!hideOverlay);
    if (player) {
      player.getIframe().style.pointerEvents = hideOverlay ? "none" : "auto";
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg max-w-2xl mx-auto">
      <div className="w-full relative rounded-lg overflow-hidden shadow-xl mb-6">
        <div className="relative">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            onStateChange={handleProgressChange}
            className="w-full flex justify-center items-center"
          />
          {hideOverlay && (
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-md cursor-none"
              style={{ zIndex: 1 }}
            >
              {isPlaying && <MusicWave />}
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full px-4 mb-4">
        <input
          type="range"
          min={0}
          max={1}
          step="0.01"
          value={progress}
          onChange={handleSeek}
          className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-700 transition-all"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 w-full">
        <button
          onClick={handleBackward}
          className="p-3 rounded-full bg-white/30 hover:bg-white/40 text-indigo-800 transition-all duration-300 backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6"
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

        <button
          onClick={handlePlayPause}
          className="p-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          {isPlaying ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
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
          )}
        </button>

        <button
          onClick={handleForward}
          className="p-3 rounded-full bg-white/30 hover:bg-white/40 text-indigo-800 transition-all duration-300 backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6"
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
        <button
          id="playerhidebtn"
          onClick={handleHideOverlay}
          className={`text-3xl rounded-full border p-3 transition-all duration-300 ${
            hideOverlay
              ? "bg-indigo-600 text-white"
              : "text-indigo-600 hover:scale-105 hover:bg-indigo-600 hover:text-white"
          }`}
        >
          <MdHideImage />
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="ytvideolink mt-6 w-full max-w-md flex gap-2"
      >
        <input
          type="text"
          placeholder="Enter Youtube Video Link"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm placeholder-indigo-400 text-indigo-800"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Play
        </button>
      </form>
    </div>
  );
};

export default YTPlayer;
