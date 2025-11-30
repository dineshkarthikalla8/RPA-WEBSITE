// src/pages/About.jsx
import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="page-container">
      <div className="page-inner">
        <div className="about-container">
          <div className="about-glass">

            {/* Title at top */}
            <h2 className="about-title about-title-top">
              About Our Club
            </h2>

            <div className="about-wrapper">

              {/* Right Content first (Text) */}
              <div className="about-right">
                <p className="about-text">
                  The Robotic Process Automation Club is a student-led community that brings
                  together individuals who are passionate about automation, AI, and digital
                  innovation. Our goal is to equip students with the knowledge, tools, and
                  practical skills required to automate complex workflows and build intelligent
                  digital solutions.
                </p>

                <h3 className="about-subtitle">We focus on:</h3>

                <ul className="about-list">
                  <li><strong>RPA Tools:</strong> UiPath, Automation Anywhere, BluePrism</li>
                  <li><strong>Automation with Code:</strong> Python, APIs, AI-based automation</li>
                  <li><strong>Real-World Projects:</strong> Automating tasks used in business, IT, and daily workflows</li>
                  <li><strong>Competitions & Hackathons:</strong> Collaborate and solve automation challenges</li>
                  <li><strong>Career Building:</strong> Resume sessions, training, certifications, and industry mentorship</li>
                </ul>

                <p className="about-footer">
                  Our club values <strong>learning, innovation, teamwork, and creativity</strong>.
                  We believe automation is the future — and we help students become part of that future.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
