import { useEffect, useRef } from "react";

export default function BackgroundMusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Ensure volume is not too loud
    audio.volume = 0.5;

    // Function to start playback
    const playAudio = () => {
      audio.play().catch(() => {});
      // Remove listeners after it starts once
      window.removeEventListener("click", playAudio);
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };

    // Try autoplay immediately (some browsers may block this)
    audio.play().catch(() => {});

    // Fallback listeners for user gestures
    window.addEventListener("click", playAudio);
    window.addEventListener("scroll", playAudio);
    window.addEventListener("touchstart", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audios/background-music.mp3"
      loop
      hidden
    />
  );
}
