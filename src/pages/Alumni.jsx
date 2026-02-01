import React from "react";
import "../styles/Alumni.css";

const ALUMNI = [
  {
    id: 1,
    name: "Anil Kumar Guggilla",
    role: "FOUNDER OF RPA CLUB (Alumnus)",
    bio: "Founder of the RPA Club and an early leader who established the automation culture at KL University. Anil Kumar is currently working as a Site Reliability Engineer – II at Cisco Systems India Pvt Ltd. His guidance continues to inspire new batches of automation enthusiasts.",
    photo: "/photos/Ak.jpg",
  },
  {
    id: 2,
    name: "Shashank",
    role: "President - Y22",
    bio: "Served as the President of RPA Club for the year 2024-2025. He is currently pursuing studies at KL University and secured internship at MATHCO.",
    photo: "/photos/Shashank.jpg",
  },
  {
    id: 3,
    name: "Pranay Vardhan",
    role: "Vice-President - Y22",
    bio: "Served as the Vice-President of RPA Club for the year 2024-2025. He is currently pursuing studies at KL University.",
    photo: "/photos/Pranay.jpg",
  },
  {
    id: 4,
    name: "Aravind",
    role: "Website-Handler - Y22",
    bio: "Served as the Website Developer for the RPA Club in 2024-2025. He is currently pursuing studies at KL University.",
    photo: "/photos/Aravindd.jpg",
  },

  {
    id: 5,
    name: "M. Thanuja",
    role: "Technical Lead- Y22",
    bio: "Served as the Technical lead for the RPA Club from 2022-2026. She completes her studies at KL University. Now working as System Enginner in TCS",
    photo: "/photos/TJ.jpg",
  },
  {
    id: 6,
    name: "N Krishna Chowdary Pathuri",
    role: "Designer and Website Handler - Y21",
    bio: "Served as the Designer and Website Handler for the RPA Club from 2022-2024.He completed his Btech in Computer Science and Engineering specialized in Artificial Intelligence and Intelligence Process Automation. Currently working at HclTech",
    photo: "/photos/NK.jpeg",
  },
  
  
];


// Extract founder
const FOUNDER = ALUMNI.find((p) => p.role.toLowerCase().includes("founder"));
const OTHERS = ALUMNI.filter((p) => p.id !== FOUNDER.id);

export default function Alumni() {
  return (
    <section className="alumni-section" id="alumni">
      <div className="alumni-inner">
        <h2 className="alumni-title">Alumni</h2>
        <p className="alumni-intro">
          Meet some of our distinguished alumni — contributors, mentors, and industry leaders who started here.
        </p>

        {/* Founder Highlight */}
        <article className="alumni-card founder-card">
          <div className="alumni-photo-wrap founder-photo-wrap">
            <img src={FOUNDER.photo} alt={FOUNDER.name} className="alumni-photo founder-photo" />
          </div>
          <div className="alumni-meta">
            <h3 className="alumni-name">{FOUNDER.name}</h3>
            <p className="alumni-role">{FOUNDER.role}</p>
            <p className="alumni-bio">{FOUNDER.bio}</p>
          </div>
        </article>

        {/* Other Alumni */}
        <div className="alumni-grid">
          {OTHERS.map((person) => (
            <article className="alumni-card" key={person.id}>
              <div className="alumni-photo-wrap">
                <img src={person.photo} alt={person.name} className="alumni-photo" />
              </div>
              <div className="alumni-meta">
                <h3 className="alumni-name">{person.name}</h3>
                <p className="alumni-role">{person.role}</p>
                <p className="alumni-bio">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
