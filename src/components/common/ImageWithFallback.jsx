"use client";

import { useState } from "react";

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackClassName = "bg-gradient-to-br from-blue-50 to-slate-200",
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return <div className={`w-full h-full ${fallbackClassName}`} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || "Business image"}
      loading="lazy"
      className={className}
      onError={() => setError(true)}
    />
  );
}

