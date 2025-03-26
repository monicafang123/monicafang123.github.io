"use client";
import { createContext, useState, useContext, useEffect } from "react";
const AudioContext = createContext();

export function AudioProvider({ children }) {
  const allSongs = [
    // {
    //   image: "/images/songs/butterflies.webp",
    //   name: "BUTTERFLIES",
    //   alt: "Butterflies",
    //   audio: "audios/Butterflies.mp3",
    // },
  ];

  // State for audio playback (status and song index)
  // start with paused because browsers prevent autoplay lollll
  const [status, setStatus] = useState("paused");
  const [isClient, setIsClient] = useState(false);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedIndex = localStorage.getItem("currentSongIndex");
      if (savedIndex) {
        setCurrentSongIndex(parseInt(savedIndex, 10));
      } else {
        setCurrentSongIndex(Math.floor(Math.random() * allSongs.length));
      }
    }
  }, []);

  // localStorage persistence (changes)
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("audioStatus", status);
      localStorage.setItem("currentSongIndex", currentSongIndex);
    }
  }, [status, currentSongIndex, isClient]);

  return (
    <AudioContext.Provider
      value={{
        status,
        setStatus,
        currentSongIndex,
        setCurrentSongIndex,
        allSongs,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

// custom hook
export function useAudio() {
  return useContext(AudioContext);
}
