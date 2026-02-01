import React from "react";
import "../styles/Gallery.css";

const galleryItems = [
  { type: "image", src: "/gallery/img1.jpg" },
  { type: "image", src: "/gallery/img2.jpg" },
  { type: "image", src: "/gallery/img3.jpg" },
  { type: "video", src: "/gallery/video1.mp4" },
  { type: "video", src: "/gallery/video2.mp4" }
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            {item.type === "image" ? (
              <img src={item.src} alt="Gallery" />
            ) : (
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support video.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

