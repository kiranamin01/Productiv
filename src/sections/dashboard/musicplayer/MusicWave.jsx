import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WaveContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 0.5rem; /* rounded-md */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
`;

const WaveBar = styled.div`
  background-color: #667eea; /* bg-indigo-500 */
  width: 22px;

  transition: height 0.1s ease-in-out;
`;

const MusicWave = () => {
  const [waveHeights, setWaveHeights] = useState(Array(7).fill(0));
  const [isAnimating, setIsAnimating] = useState(true);

  // Effect for wave animation
  useEffect(() => {
    let intervalId;

    if (isAnimating) {
      intervalId = setInterval(() => {
        const newHeights = waveHeights.map(
          () => Math.floor(Math.random() * 50) + 10
        );
        setWaveHeights(newHeights);
      }, 150);
    }

    // Cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAnimating, waveHeights]);

  // Effect for component mount/unmount
  useEffect(() => {
    setIsAnimating(true);

    return () => {
      setIsAnimating(false);
    };
  }, []);

  return (
    <>
      <WaveContainer>
        {waveHeights.map((height, index) => (
          <WaveBar
            key={index}
            style={{ height: `${height}px` }}
            className="wave-bar"
          />
        ))}
      </WaveContainer>
    </>
  );
};

export default MusicWave;
