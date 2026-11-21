"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

interface HeroBackgroundVideoProps {
  src: string;
  poster: string;
}

export function HeroBackgroundVideo({ src, poster }: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyPreference = () => {
      if (mq.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          // Ignore autoplay rejection on restricted browsers; poster remains visible
        });
      }
    };

    applyPreference();

    const onPlay = () => setPaused(false);
    const onPause = () => setPaused(true);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    mq.addEventListener("change", applyPreference);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      mq.removeEventListener("change", applyPreference);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <>
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none object-cover object-center"
      />
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Cinematic readability scrim preserving vivid video motion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/55 to-[#0F172A]/65"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F172A]/75 via-[#0F172A]/25 to-transparent"
      />

      {/* WCAG 2.2.2 Pause / Play control for decorative background video */}
      <button
        type="button"
        onClick={togglePlayback}
        aria-pressed={paused}
        aria-label={paused ? "Play background video" : "Pause background video"}
        className="absolute right-5 bottom-5 z-20 inline-flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-lg border border-white/25 bg-[#0F172A]/65 text-white backdrop-blur-md transition-colors hover:border-[#34D399] hover:bg-[#0F172A]/85 sm:right-8 sm:bottom-6"
      >
        {paused ? (
          <Play aria-hidden="true" className="h-4 w-4" />
        ) : (
          <Pause aria-hidden="true" className="h-4 w-4" />
        )}
      </button>
    </>
  );
}
