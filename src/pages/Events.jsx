import "../styles/Events.css";
import React from "react";

export default function Events() {
  return (
    <div className="events-page">
      <h2 className="text-2xl font-semibold text-white">
        All Events
      </h2>

      <div className="glass events-card">
        <img
          src="/photos/Outreach Poster.jpg"
          alt="WITH AI Event"
          className="events-poster"
        />

        <div className="events-content">
          <span className="events-tag">Automation Anywhere</span>

          <h3 className="text-white text-xl font-semibold">
            WITH AI – An Outreach Event
          </h3>

          <p className="text-gray-300 mt-2">
            📅 23-01-2026
          </p>

          <p className="text-gray-400 mt-4">
            An awareness-driven initiative to introduce the public to the power
            of Artificial Intelligence and Robotic Process Automation. Learn how
            AI tools can simplify daily tasks, improve productivity, and save
            valuable time.
          </p>
        </div>
      </div>
    </div>
  );
}
