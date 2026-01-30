import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="home-container relative min-h-screen w-full bg-transparent text-white px-10 pt-20">

      {/* 🔴 Maintenance Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black p-10 rounded-xl shadow-2xl text-center max-w-lg w-full">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              🚧 SITE UNDER MAINTENANCE 🚧
            </h1>
            <p className="text-lg mb-6">
              We are currently working on improvements.<br />
              Please check back soon!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <img
        src="/photos/RPA LOGO.png"
        alt="RPA Logo"
        className="hero-image"
      />

      <div className="max-w-2xl">
        <div className="home-heading-wrapper">
          <h1 className="home-heading typing-hover" data-text="Welcome to the RPA Club">
            Welcome to the <span className="home-heading-accent">RPA Club</span>
          </h1>
        </div>

        <div className="home-sub-heading-wrapper">
          <h2>Technical Club in KL University</h2>
        </div>

        <p className="hero-description">
          Explore automation, AI, and intelligent workflows to enhance productivity.
          <br />
          Unlock the world of automation with a team of passionate learners and innovators.
          <br />
          At the RPA Club, we explore Robotic Process Automation, AI-driven workflows,
          and modern productivity tools that redefine how processes work.
        </p>

        <Link to="/tools">
          <button className="tools-used-btn mt-6 px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition">
            TOOLS USED
          </button>
        </Link>
      </div>
    </div>
  );
}
