"use client";

import { useEffect, useRef, useState } from "react";

const PLAYLIST = [
  "/music/background-1.mp3",
  "/music/background-3.mp3",
  "/music/background-2.mp3",
];

export default function GlobalMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  const [trackIndex, setTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.18); // 🔉 volume initial réduit
  const [paused, setPaused] = useState(false);

  // ▶️ DÉMARRAGE INITIAL
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || startedRef.current) return;

    audio.loop = true;
    audio.volume = volume;
    audio.src = PLAYLIST[trackIndex];

    audio.play().catch(() => {});
    startedRef.current = true;
  }, []);

  // 🔄 CHANGEMENT DE MUSIQUE
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.src = PLAYLIST[trackIndex];
    audio.volume = volume;

    if (!paused) {
      audio.play().catch(() => {});
    }
  }, [trackIndex]);

  // 🔊 SYNCHRO VOLUME
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // ⏸️ PLAY / PAUSE
  const togglePause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
    setPaused(!paused);
  };

  // 🔁 MUSIQUE SUIVANTE
  const nextTrack = () => {
    setTrackIndex((i) => (i + 1) % PLAYLIST.length);
  };

  // 🔉 VOLUME
  const volumeUp = () => setVolume((v) => Math.min(v + 0.05, 0.5));
  const volumeDown = () => setVolume((v) => Math.max(v - 0.05, 0));

  return (
    <>
      {/* 🎶 AUDIO GLOBAL */}
      <audio id="global-music" ref={audioRef} preload="auto" />

      {/* 🎛️ CONTROLES */}
      <div
        className="
          fixed top-4 right-4 z-50
          flex items-center gap-2
          bg-black/40 backdrop-blur
          px-3 py-2 rounded-full
          text-white shadow-lg
        "
      >
        <button onClick={volumeDown}>➖</button>

        <button onClick={togglePause}>{paused ? "▶️" : "⏸️"}</button>

        <button onClick={volumeUp}>➕</button>

        <button onClick={nextTrack} title="Changer de musique">
          🔁
        </button>
      </div>
    </>
  );
}
