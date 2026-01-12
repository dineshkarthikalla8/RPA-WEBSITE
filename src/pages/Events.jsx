import "../styles/Events.css";
import React from "react";

export default function Events() {

  const events = [
    {
      id: 1,
      title: "WITH AI – An Outreach Event",
      date: "23-01-2026",
      description:
        "An awareness-driven initiative to introduce the public to the power of Artificial Intelligence and Robotic Process Automation. Learn how AI tools can simplify daily tasks, improve productivity, and save valuable time.",
      poster: "/photos/Outreach Poster.jpg",
      tag: "Automation Anywhere",
    },
  ];

  return (
    <div className="container py-8">
      <h2 className="text-2xl font-semibold text-white mb-6">
        All Events
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="glass rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
          >
            {/* Poster */}
            <img
              src={event.poster}
              alt={event.title}
              className="w-full h-56 object-cover"
            />

            {/* Event Content */}
            <div className="p-4">
              <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-blue-600 text-white">
                {event.tag}
              </span>

              <h4 className="text-lg font-semibold text-white">
                {event.title}
              </h4>

              <p className="text-sm text-gray-300 mt-1">
                📅 {event.date}
              </p>

              <p className="text-gray-400 text-sm mt-3">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


<div
  className="glass"
  style={{
    maxWidth: "1200px",
    width: "95%",
    margin: "40px auto"
  }}
>
