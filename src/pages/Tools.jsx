import React from "react";
import "../styles/Tools.css"; // make sure this path matches your styles folder

export default function ToolsUsed() {
  // image paths (should be in public/photos/)
  const tools = [
    { id: "aa", name: "Automation Anywhere", src: "/photos/AA.png", alt: "Automation Anywhere" },
    { id: "bp", name: "Blue Prism", src: "/photos/BP.png", alt: "Blue Prism" },
    { id: "ui", name: "UiPath", src: "/photos/UIP.png", alt: "UiPath" },
    { id: "tg", name: "Telegram", src: "/photos/T.png", alt: "Telegram" },
  ];

  return (
    <div className="tools-page">
      <div className="tools-hero">
        <h1 className="tools-title">Tools used in RPA</h1>
        <p className="tools-sub">
          Core automation platforms & community channels we use for teaching and projects.
        </p>
      </div>

      <div className="tools-grid" role="list" aria-label="Tools used in RPA">
        {tools.map((t) => (
          <figure className="tool-card" key={t.id} role="listitem" aria-label={t.name}>
            {/* Non-clickable thumbnail (if you want clickable replace div with <a href=...>) */}
            <div
              className="tool-thumb"
              role="img"
              aria-label={`${t.name} logo`}
              tabIndex={0} /* allow keyboard focus for hover/focus effects */
            >
              <img src={t.src} alt={t.alt} className="tool-logo" draggable="false" />
            </div>

            <figcaption className="tool-name">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
