import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function Join() {
  return (
    <div className="container py-20 text-white">
      <div className="max-w-3xl space-y-6">

        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Join the RPA Club
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Unlock new opportunities and enhance your technical skills by becoming
          a part of our innovative and fast-growing RPA Club. We welcome passionate
          learners and creators who are ready to grow, collaborate, and build
          amazing solutions.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          If you're interested in joining, feel free to reach out to our dedicated
          Core Member, <br />
          <span className="font-bold text-blue-400">Dinesh Karthik Alla</span>,
          through Telegram for complete details and guidance.
        </p>

        <a
          href="https://t.me/dineshkarthik_alla"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition font-semibold text-lg shadow-lg"
        >
          Contact on Telegram
          <FaTelegramPlane size={22} />
        </a>

      </div>
    </div>
  );
}
