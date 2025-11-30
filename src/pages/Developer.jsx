// src/pages/Developer.jsx
import React from "react";
import "../styles/developer.css";

export default function Developer() {
  return (
    <div className="developer-page container mx-auto px-6 py-12">
      <div className="developer-inner grid lg:grid-cols-2 gap-8 items-center">
        
        {/* LEFT: Photo */}
        <div className="developer-photo-wrapper">
          <img
            src="/photos/Karthiku.jpg"
            alt="Dinesh Karthik Alla"
            className="developer-photo"
            loading="lazy"
          />
        </div>

        {/* RIGHT: Bio */}
        <div className="developer-details">
          <h1 className="developer-name">Dinesh Karthik Alla</h1>
          <p className="developer-role">
           • Vice President Y23 - RPA CLUB
            <br/> <br/> • RPA ESSENTIALS CERTIFIED 2023
          </p>

          <div className="developer-bio">

            <p>
              Designed and Developed by <strong>Dinesh Karthik</strong>
            </p>
            
          </div>
          <div className="developer-warning mt-8">
            <h4>Copyright & Usage</h4>
            <p>
              © {new Date().getFullYear()} <strong>Dinesh Karthik Alla</strong>. All rights reserved.
              The code, images, and content on this page are protected. Unauthorized copying,
              redistribution, or commercial usage is strictly prohibited.
            </p>
          </div>
          <div className="mt-6 developer-contact">
              <a className="contact-pill" href="https://t.me/dineshkarthik_alla">Contact</a>
            </div>

        </div>
      </div>
    </div>
  );
}
