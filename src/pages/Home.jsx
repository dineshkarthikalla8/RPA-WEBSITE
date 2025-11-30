import React from "react";
import { Link } from "react-router-dom";   // ✅ Add this import
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container relative min-h-screen w-full bg-transparent text-white px-10 pt-20">

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
        <h2>
          Technical Culb in KL University
        </h2>
        </div>
        <p className="hero-description">
          Explore automation, AI, and intelligent workflows to enhance productivity.
          <br/>
          Unlock the world of automation with a team of passionate learners and innovators.
          <br/>
          At the RPA Club, we explore Robotic Process Automation, AI-driven workflows,
          and modern productivity tools that redefine how processes work.
          <br/>
          Through workshops, real-time projects, and hands-on training, we empower
          students to build intelligent solutions, automate repetitive tasks, and 
          develop skills that shape the future of digital transformation.
          	
        </p>
          
        {/* Button to Tools Page */}
        <Link to="/tools">
          <button className="tools-used-btn mt-6 px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition">
            TOOLS USED
          </button>
        </Link>
      
      </div>
    </div>
    
  );
}
