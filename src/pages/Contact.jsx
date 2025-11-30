// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-8 text-gray-200">
      <h2 className="text-4xl font-bold mb-8 tracking-wide">Contact</h2>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl p-10 rounded-2xl text-gray-300">

        <h4 className="font-semibold text-blue-400 text-xl mb-8">
          Contact through social media
        </h4>

        {/* TELEGRAM BLOCK */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-5 hover:bg-white/10 transition mb-6">
          <i className="fa-brands fa-telegram text-4xl text-white/70"></i>
          <div>
            <p className="font-semibold text-lg text-white">Telegram</p>
            <p className="text-white/70">
              Join us and message us directly on Telegram —
              <a href="https://t.me/rpatechclub"target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline ml-1">Click here</a>
            </p>
          </div>
        </div>

        {/* INSTAGRAM BLOCK */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-5 hover:bg-white/10 transition mb-6">
          <i className="fa-brands fa-instagram text-4xl text-white/70"></i>
          <div>
            <p className="font-semibold text-lg text-white">Instagram</p>
            <p className="text-white/70">
              Follow our official Instagram —
              <a href="https://www.instagram.com/rpa.klef" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline ml-1">Visit page </a>
            </p>
          </div>
        </div>

        {/* LINKEDIN BLOCK */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-5 hover:bg-white/10 transition mb-6">
          <i className="fa-brands fa-linkedin text-4xl text-white/70"></i>
          <div>
            <p className="font-semibold text-lg text-white">LinkedIn</p>
            <p className="text-white/70">
              Check our LinkedIn posts —
              <a href="www.linkedin.com/in/rpa-tech-club-1a5598244" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline ml-1">View profile</a>
            </p>
          </div>
        </div>

        {/* WHATSAPP BLOCK */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-5 hover:bg-white/10 transition mb-6">
          <i className="fa-brands fa-whatsapp text-4xl text-white/70"></i>
          <div>
            <p className="font-semibold text-lg text-white">WhatsApp</p>
            <p className="text-white/70">
              Join us on Whatsapp Updates Group — 
              <a href="https://whatsapp.com/channel/0029VbBhcgGCcW4lUcT7DU3L" target="_blank" rel="noreferrer"
                 className="text-cyan-400 hover:underline ml-1">View Whatsapp Updates Group</a>
              
            </p>
          </div>
        </div>

        {/* TEXT BELOW */}
        <p className="mt-10">
          Stay connected, stay updated to all SOCIAL MEDIA PLATFORMS and be prepared for an exciting journey into the 
          world of automation and intelligent systems. Let’s build smarter solutions and 
          help shape the future of RPA together.
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
