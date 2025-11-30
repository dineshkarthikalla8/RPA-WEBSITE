// src/App.jsx — rollback to original working structure
import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import CurtainLoader from "./pages/RobotLoader";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Updates from "./pages/Updates";
import Join from "./pages/Join";
import Alumni from "./pages/Alumni";
import Developer from "./pages/Developer";
import Tools from "./pages/Tools";

import './styles/global.css';


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <CurtainLoader>
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/join" element={<Join />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/developer" element={<Developer />} />
              <Route path="/tools" element={<Tools />} />
            </Routes>
          </main>
        <Footer />
      </CurtainLoader>
    </div>
  );
}
