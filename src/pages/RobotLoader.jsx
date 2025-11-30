import React, { useEffect, useState, useRef } from "react";
import "../styles/RobotLoader.css";

export default function RobotLoader({ children }) {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // When video ends → hide loader
    const onEnd = () => {
      setShowVideo(false);
    };

    video.addEventListener("ended", onEnd);

    return () => video.removeEventListener("ended", onEnd);
  }, []);

  // When hidden, show actual website
  if (!showVideo) {
    return <>{children}</>;
  }

  return (
    <div className="video-loader">
      <video
        ref={videoRef}
        className="loader-video"
        autoPlay
        muted
        playsInline
      >
        <source src="/photos/Animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
