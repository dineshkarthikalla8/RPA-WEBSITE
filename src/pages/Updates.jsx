// src/pages/Updates.jsx
import React from "react";

export default function Updates() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-8 text-gray-200">
      <h2 className="text-4xl font-bold mb-8 tracking-wide">Updates</h2>

      {/* ===== Update Card ===== */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl 
                      p-10 rounded-2xl max-w-7xl leading-relaxed text-gray-300 mb-10">

        <h4 className="font-semibold text-blue-400 text-xl mb-5">New Update</h4>

        <p className="mb-4">
          The RPA Club is all set to elevate the next semester with a fresh wave of
          <span className="text-white font-medium">
            {" "}innovative events, practical workshops, and interactive sessions
          </span>
          designed to boost your automation skills.
        </p>

        <p className="mb-4">
          We’re introducing more opportunities for learning, collaboration, and
          hands-on experience with real-world RPA tools.
        </p>

        <p className="mb-4">
          This semester, our goal is to build a more engaging and active community—one where
          every member participates, shares ideas, and grows together.
        </p>

        <p className="mb-4">
          Stay connected, stay updated, and be prepared for an exciting journey into the
          world of automation and intelligent systems.
        </p>

        <p className="text-white font-medium mt-8">Stay tuned for updates!</p>

        <p className="mt-6 text-gray-400">
          — Team RPA <br />
          FOCUS, KLEF.
        </p>
      </div>

      {/* ===== Event Update Card ===== */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl 
                      p-10 rounded-2xl max-w-7xl leading-relaxed text-gray-300">

        <h4 className="font-semibold text-blue-400 text-xl mb-5">Event Update</h4>

        <p className="mb-4">
          The RPA Club is all set to conduct an outreach event on
          <span className="text-white font-medium"> 23rd January 2026</span>
          to create awareness on AI and Cyber Systems.
        </p>

        <p className="mb-4">
          All RPA Club members are required to attend this session on
          <span className="text-white font-medium"> Friday afternoon</span>.
        </p>

        <p className="text-white font-medium mt-8">Stay tuned for updates!</p>

        <p className="mt-6 text-gray-400">
          — Team RPA <br />
          FOCUS, KLEF.
        </p>
      </div>

    </section>
  );
}
