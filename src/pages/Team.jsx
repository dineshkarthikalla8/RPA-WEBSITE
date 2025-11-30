import React, { useState } from "react";
import "../styles/Team.css";
import { higher, coordinators, juniors } from "../data/teamData";

/**
 * Team page: each card is a photo box; name & role appear directly beneath the photo.
 * Clicking a photo spins it to reveal the name/role on the back.
 */

function PhotoBox({ name, photo, role, size = "large" }) {
  // size: "large" | "medium" | "small"
  const sizeClass = size === "large" ? "photo-large" : size === "medium" ? "photo-medium" : "photo-small";

  // initials fallback
  const initials = (name || "")
    .split(" ")
    .map(n => (n ? n[0] : ""))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  // flipped state for the card
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped(prev => !prev);

  // keyboard accessibility: Enter or Space toggles
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      className={`photo-card ${sizeClass} ${flipped ? "flipped" : ""}`}
      onClick={toggleFlip}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${name} - ${role}. Click to ${flipped ? "hide" : "show"} details.`}
    >
      <div className="photo-card-inner">
        {/* Front */}
        <div className="photo-card-face photo-card-front glass">
          {photo ? (
            <img src={photo} alt={name} className="photo-img" loading="lazy" />
          ) : (
            <div className="photo-initials">{initials}</div>
          )}
        </div>

        {/* Back */}
        <div className="photo-card-face photo-card-back">
          <div className="back-content">
            <div className="back-name">{name}</div>
            {role && <div className="back-role">{role}</div>}
            <div className="back-hint">Click again or press Esc to close</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Our Team</h2>

      {/* Leadership */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-6">CLUB LEADS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          {higher.map((p) => (
            <div key={p.name} className="team-item text-center">
              <PhotoBox name={p.name} photo={p.photo} role={p.role} size="large" />
              <h4 className="team-name mt-4">{p.name}</h4>
              <div className="team-role muted">{p.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Coordinators */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-6">COORDINATORS</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-8 items-start">
          {coordinators.map((p) => (
            <div key={p.name} className="team-item text-center">
              <PhotoBox name={p.name} photo={p.photo} role={p.role} size="medium" />
              <h4 className="team-name mt-4">{p.name}</h4>
              <div className="team-role muted">{p.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Juniors */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-6">JUNIOR CORE MEMBERS</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-start">
          {juniors.map((p) => (
            <div key={p.name} className="team-item text-center">
              <PhotoBox name={p.name} photo={p.photo} role={p.role} size="small" />
              <h4 className="team-name mt-4">{p.name}</h4>
              <div className="team-role muted">{p.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
