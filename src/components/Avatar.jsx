// src/components/Avatar.jsx
import React, { useState } from "react";

export default function Avatar({
  name = "U N",
  photo = "",
  sizeClass = "avatar-medium",
  alt = "",
}) {
  const [src, setSrc] = useState(photo || "");
  const [errored, setErrored] = useState(false);

  const initials = (name || "")
    .split(" ")
    .map((n) => n[0] || "")
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const fallbackImg = "/photos/default.png";

  const initialsSizeClass =
    sizeClass.includes("large")
      ? "text-3xl"
      : sizeClass.includes("medium")
      ? "text-2xl"
      : "text-lg";

  function handleError() {
    if (!errored && fallbackImg) {
      setSrc(fallbackImg);
      setErrored(true);
    } else {
      setSrc(""); // initials mode
    }
  }

  return (
    <div className={`inline-block ${sizeClass}`}>
      {/* Square Avatar */}
      {src ? (
        <img
          src={src}
          alt={alt || name}
          onError={handleError}
          className={`object-cover w-full h-full shadow-lg rounded-lg`} 
        />
      ) : (
        <div
          className={`bg-white/10 flex items-center justify-center text-white/90 w-full h-full shadow-md rounded-lg`}

        >
          <span className={`${initialsSizeClass} font-semibold`}>
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
