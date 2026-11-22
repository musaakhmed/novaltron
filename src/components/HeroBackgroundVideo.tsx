"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

interface HeroBackgroundVideoProps {
  webmSrc: string;
  mp4Src: string;
  poster: string;
}

export function HeroBackgroundVideo({
  webmSrc,
  mp4Src,
  poster,
}: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyPreference = () => {
      if (mq.matches) {
        video.pause();
        setPaused(true);
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
        preload
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none object-cover object-center"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        width={1920}
        height={1080}
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
      >
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
      </video>
      {/* Directional Deep Slate Navy (#0F172A) scrim: ~82% left behind copy fading to ~48% right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F172A]/82 via-[#0F172A]/68 to-[#0F172A]/48"
      />
      {/* Subtle top-edge guard for transparent fixed Header navigation over bright sky footage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0F172A]/40 to-transparent"
      />

      {/* WCAG 2.2.2 Pause / Play control for decorative background video */}
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={paused ? "Play background video" : "Pause background video"}
        className="absolute right-5 bottom-5 z-20 inline-flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-lg border border-white/25 bg-[#0F172A]/65 text-white backdrop-blur-md transition-colors hover:border-[#34D399] hover:bg-[#0F172A]/85 sm:right-8 sm:bottom-6 motion-reduce:hidden"
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
