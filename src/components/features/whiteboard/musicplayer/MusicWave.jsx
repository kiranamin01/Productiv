import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WaveContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 5rem;
`;

const WaveBar = styled.div`
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
  width: 12px;
  border-radius: 20px;
  transform-origin: bottom;
  animation: pulse 1s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);

  @keyframes pulse {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.7);
    }
  }
`;

const MusicWave = () => {
  const [waveHeights, setWaveHeights] = useState(Array(12).fill(0));
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isAnimating) {
      intervalId = setInterval(() => {
        setWaveHeights(() => {
          return Array(12)
            .fill(0)
            .map(() => {
              const baseHeight = 100;
              const variance = 60;
              return (
                baseHeight +
                Math.sin(Date.now() * 0.01) * variance +
                Math.random() * 20
              );
            });
        });
      }, 100);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAnimating]); // Removed waveHeights from dependencies

  useEffect(() => {
    setIsAnimating(true);
    return () => setIsAnimating(false);
  }, []);

  return (
    <WaveContainer>
      {waveHeights.map((height, index) => (
        <WaveBar
          key={index}
          style={{
            height: `${height}px`,
            animationDelay: `${index * 0.1}s`,
            opacity: 0.7 + Math.random() * 0.3,
          }}
          className="wave-bar"
        />
      ))}
    </WaveContainer>
  );
};

export default MusicWave;