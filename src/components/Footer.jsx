// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"; 

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        
        <div className="footer-grid">
          
          {/* LOGO + DESCRIPTION */}
          <div className="footer-logo-section">
            <div className="footer-logo-box">
              <img
                src="/photos/RPALOGO.png"
                alt="RPA Logo"
                className="footer-logo-img"
              />
              <h2 className="footer-logo-title">RPA Club</h2>
            </div>

            <p className="footer-description">
              Empowering automation excellence through Robotic Process Automation,
              innovation, teamwork, and technology-driven growth.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links-section">
            <h3 className="footer-heading">Quick Links</h3>

            <div className="footer-links-grid">

              {/* Column 1 */}
              <ul className="footer-column">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About</Link></li>
                <li><Link to="/events" className="footer-link">Events</Link></li>
                <li><Link to="/team" className="footer-link">Team</Link></li>
              </ul>

              {/* Column 2 */}
              <ul className="footer-column">
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
                <li><Link to="/updates" className="footer-link">Updates</Link></li>
                <li><Link to="/alumni" className="footer-link">Alumni</Link></li>
                <li><Link to="/developer" className="footer-link">Developer</Link></li>
              </ul>

            </div>
          </div>

          {/* SOCIAL */}
          <div className="footer-social-section">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="footer-social-icons">
              <a href="https://t.me/rpatechclub" className="footer-social-link" target="_blank" rel="noreferrer"
              >
              <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="https://www.instagram.com/rpa.klef" className="footer-social-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/rpa-tech-club-1a5598244/" className="footer-social-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://whatsapp.com/channel/0029VbBhcgGCcW4lUcT7DU3L" className="footer-social-link whatsapp"target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} RPA Club. All Rights Reserved
        </div>

      </div>
    </footer>
  );
}
