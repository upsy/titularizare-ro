"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
}

interface AudioPlayerActions {
  loadAndPlay: (src: string) => void;
  pause: () => void;
  toggle: () => void;
  seek: (time: number) => void;
  setRate: (rate: number) => void;
  cleanup: () => void;
}

export function useAudioPlayer(): AudioPlayerState & AudioPlayerActions {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number>(0);
  const srcRef = useRef<string>("");

  const stopPolling = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
  }, []);

  const startPolling = useCallback(() => {
    const poll = () => {
      const audio = audioRef.current;
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
      rafRef.current = requestAnimationFrame(poll);
    };
    stopPolling();
    rafRef.current = requestAnimationFrame(poll);
  }, [stopPolling]);

  const cleanup = useCallback(() => {
    stopPolling();
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }
    audioRef.current = null;
    srcRef.current = "";
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setPlaybackRate(1);
  }, [stopPolling]);

  const loadAndPlay = useCallback(
    (src: string) => {
      // If same source, just resume
      if (audioRef.current && srcRef.current === src) {
        audioRef.current.play();
        setIsPlaying(true);
        startPolling();
        return;
      }

      // New source — cleanup previous
      cleanup();

      const audio = new Audio(src);
      audioRef.current = audio;
      srcRef.current = src;

      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });

      audio.addEventListener("ended", () => {
        setIsPlaying(false);
        stopPolling();
      });

      audio.play();
      setIsPlaying(true);
      startPolling();
    },
    [cleanup, startPolling, stopPolling]
  );

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
    stopPolling();
  }, [stopPolling]);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      pause();
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      startPolling();
    }
  }, [isPlaying, pause, startPolling]);

  const seek = useCallback((time: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const setRate = useCallback((rate: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.playbackRate = rate;
    }
    setPlaybackRate(rate);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopPolling();
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
      }
    };
  }, [stopPolling]);

  return {
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    loadAndPlay,
    pause,
    toggle,
    seek,
    setRate,
    cleanup,
  };
}
