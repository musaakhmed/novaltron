import React from "react";

interface LogoMarkProps {
  className?: string;
  variant?: "dark-on-light" | "light-on-dark";
  decorative?: boolean;
}

/**
 * Pure-vector Concept 1 — Precision Corridor chamfered emblem (64x64 viewBox).
 */
export function PrecisionCorridorBadge({
  className = "h-8 w-8 shrink-0",
  variant = "light-on-dark",
  decorative = true,
}: LogoMarkProps) {
  const frameFill = variant === "light-on-dark" ? "#133045" : "#0A1F2E";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      aria-hidden={decorative ? "true" : undefined}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Novaltron emblem"}
    >
      <path d="M 4,4 H 50 L 60,14 V 60 H 4 Z" fill={frameFill} />
      <path d="M 15,49 V 15 H 24 L 33,27.5 L 27,32 L 23,26.5 V 49 Z" fill="#FFFFFF" />
      <path d="M 49,15 V 49 H 40 L 31,36.5 L 37,32 L 41,37.5 V 15 Z" fill="#5BB87A" />
    </svg>
  );
}

/**
 * Pure-vector Concept 1 — Precision Corridor NOVALTRON wordmark (-4 4 393 52 viewBox).
 */
export function PrecisionCorridorWordmark({
  className = "h-4 w-auto shrink-0",
  variant = "light-on-dark",
  decorative = true,
}: LogoMarkProps) {
  const ink = variant === "light-on-dark" ? "#FFFFFF" : "#0A1F2E";
  const accent = variant === "light-on-dark" ? "#5BB87A" : "#267042";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-4 4 393 52"
      className={className}
      aria-hidden={decorative ? "true" : undefined}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "NOVALTRON"}
    >
      <path d="M 0,50 V 10 H 9.5 L 19,24.5 L 13,29 L 8,21.5 V 50 Z" fill={ink} />
      <path d="M 36,10 V 50 H 26.5 L 17,35.5 L 23,31 L 28,38.5 V 10 Z" fill={accent} />
      <path
        fillRule="evenodd"
        d="M 63,9.2 H 65 A 18,18 0 0 1 83,27.2 V 32.8 A 18,18 0 0 1 65,50.8 H 63 A 18,18 0 0 1 45,32.8 V 27.2 A 18,18 0 0 1 63,9.2 Z M 63,16.8 H 65 A 10,10 0 0 1 75,26.8 V 33.2 A 10,10 0 0 1 65,43.2 H 63 A 10,10 0 0 1 53,33.2 V 26.8 A 10,10 0 0 1 63,16.8 Z"
        fill={ink}
      />
      <path d="M 91,10 H 99.5 L 109,40.5 L 118.5,10 H 127 L 113.5,50 H 104.5 Z" fill={ink} />
      <path
        fillRule="evenodd"
        d="M 147.5,10 H 156.5 L 171,50 H 162.4 L 159,40.5 H 145 L 141.6,50 H 133 Z M 152,19.2 L 147.2,33.5 H 156.8 Z"
        fill={ink}
      />
      <path d="M 180,10 H 188 V 42.6 H 210 V 50 H 180 Z" fill={ink} />
      <path d="M 215,10 H 249 V 17.4 H 236 V 50 H 228 V 17.4 H 215 Z" fill={ink} />
      <path
        fillRule="evenodd"
        d="M 258,10 H 279.5 C 287.5,10 292.5,14.8 292.5,21.8 C 292.5,27.2 289.2,31.2 283.8,32.8 L 294,50 H 284.8 L 275.5,33.8 H 266 V 50 H 258 Z M 266,17.2 V 26.8 H 278.5 C 282.2,26.8 284.5,24.8 284.5,22 C 284.5,19.2 282.2,17.2 278.5,17.2 Z"
        fill={ink}
      />
      <path
        fillRule="evenodd"
        d="M 320,9.2 H 322 A 18,18 0 0 1 340,27.2 V 32.8 A 18,18 0 0 1 322,50.8 H 320 A 18,18 0 0 1 302,32.8 V 27.2 A 18,18 0 0 1 320,9.2 Z M 320,16.8 H 322 A 10,10 0 0 1 332,26.8 V 33.2 A 10,10 0 0 1 322,43.2 H 320 A 10,10 0 0 1 310,33.2 V 26.8 A 10,10 0 0 1 320,16.8 Z"
        fill={ink}
      />
      <path d="M 349,50 V 10 H 357.2 L 377,37.8 V 10 H 385 V 50 H 376.8 L 357,22.2 V 50 Z" fill={ink} />
    </svg>
  );
}
