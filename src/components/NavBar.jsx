// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close when route changes
  useEffect(() => setOpen(false), [location.pathname]);

  // Close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside mobile menu
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (open && !menuRef.current.contains(e.target) && !hamburgerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Manage focus to avoid aria-hidden warnings:
  // - When menu opens, focus the first link inside it.
  // - When menu closes, restore focus to hamburger button.
  useEffect(() => {
    if (open) {
      // small timeout to allow menu's DOM/animation to complete
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    } else {
      // return focus to hamburger when menu closes
      hamburgerRef.current?.focus?.();
    }
  }, [open]);

  const navItem = ({ isActive }) =>
    isActive ? "text-white font-semibold" : "text-white/70 hover:text-white transition";

  return (
    <>
      {/* NOTE: header z set high so it sits above floating button */}
      <header className="sticky top-0 z-[3000]">
        <div className="w-full bg-black/70 backdrop-blur-md border-b border-white/10">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="flex items-center justify-between h-20">
              {/* Left: logo */}
              <Link to="/" className="flex items-center gap-3" aria-label="Home">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-black flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
                  <img
                    src="/photos/RPALOGO.png"
                    alt="RPA Club Logo"
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
                <span className="text-white font-bold text-lg tracking-tight">RPA CLUB</span>
              </Link>

              {/* Center: desktop nav */}
              <nav className="hidden md:flex gap-10 items-center" aria-label="Primary navigation">
                <NavLink to="/" end className={navItem}>Home</NavLink>
                <NavLink to="/about" className={navItem}>About</NavLink>
                <NavLink to="/events" className={navItem}>Events</NavLink>
                <NavLink to="/contact" className={navItem}>Contact</NavLink>
                <NavLink to="/updates" className={navItem}>Updates</NavLink>
                <NavLink to="/gallery" className={navItem}>Gallery</NavLink>
                <NavLink to="/developer" className={navItem}>Developer</NavLink>
                <NavLink to="/alumni" className={navItem}>Alumni</NavLink>
              </nav>

              {/* Right: actions */}
              <div className="flex items-center gap-4">
                <Link
                  to="/join"
                  className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-600 text-black font-semibold shadow-[0_10px_30px_rgba(56,189,248,0.12)] hover:brightness-105 transition"
                >
                  Join
                </Link>

                <Link
                  to="/join"
                  className="inline-flex lg:hidden items-center px-4 py-2 rounded-full bg-cyan-400 text-black font-semibold shadow-sm hover:brightness-105 transition"
                >
                  Join
                </Link>

                {/* Hamburger */}
                <button
                  ref={hamburgerRef}
                  onClick={() => setOpen((v) => !v)}
                  className="md:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-expanded={open}
                  aria-controls="mobile-navigation"
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                    {open ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu (slide-down) */}
            {/* IMPORTANT: aria-hidden is set correctly and we manage focus so there won't be a focus-inside-while-hidden warning */}
            <div
              id="mobile-navigation"
              ref={menuRef}
              className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}
              aria-hidden={!open}
            >
              <nav className="flex flex-col gap-2 py-4" aria-label="Mobile navigation">
                <NavLink
                  to="/"
                  end
                  ref={firstLinkRef}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "px-4 py-3 rounded bg-white/5 text-white font-semibold" : "px-4 py-3 rounded hover:bg-white/3 text-white/80")}
                >
                  Home
                </NavLink>

                <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "px-4 py-3 rounded bg-white/5 text-white font-semibold" : "px-4 py-3 rounded hover:bg-white/3 text-white/80")}>About</NavLink>

                <NavLink to="/events" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "px-4 py-3 rounded bg-white/5 text-white font-semibold" : "px-4 py-3 rounded hover:bg-white/3 text-white/80")}>Events</NavLink>

                <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "px-4 py-3 rounded bg-white/5 text-white font-semibold" : "px-4 py-3 rounded hover:bg-white/3 text-white/80")}>Contact</NavLink>

                <NavLink to="/updates" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "px-4 py-3 rounded bg-white/5 text-white font-semibold" : "px-4 py-3 rounded hover:bg-white/3 text-white/80")}>Updates</NavLink>

                <NavLink to="/developer" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "px-4 py-3 rounded bg-white/5 text-white font-semibold" : "px-4 py-3 rounded hover:bg-white/3 text-white/80")}>Developer</NavLink>

                <NavLink to="/alumni" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "px-4 py-3 rounded bg-white/5 text-white font-semibold" : "px-4 py-3 rounded hover:bg-white/3 text-white/80")}>Alumni</NavLink>

                <div className="px-4 pt-2">
                  <Link to="/join" onClick={() => setOpen(false)} className="block w-full text-center px-4 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-600 text-black font-semibold">Join</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* subtle glossy highlight overlay */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white/10 via-white/6 to-white/10 opacity-40 blur-[6px]" />
      </header>

      {/* Floating Our Team button (fixed to viewport but placed JUST BELOW the navbar)
          - zIndex lowered to avoid covering header
          - pointerEvents disabled while mobile menu is open so it can't intercept clicks
      */}
      <Link
        to="/team"
        className="team-floating-btn"
        aria-label="Our Team"
        title="Our Team"
        style={{
          zIndex: 1200, // lower than header (header has z 3000)
          pointerEvents: open ? "none" : "auto"
        }}
      >
        <span className="btn-icon" aria-hidden="true">
          <FaUsers size={18} />
        </span>
        <span className="btn-label">Our Team</span>
      </Link>

      {/* floating button styles copy (kept inline for convenience) */}
      <style>{`
        .team-floating-btn { position: fixed; top: calc(5rem + 10px); right: 20px; z-index: 1200; display: inline-flex; align-items: center; gap: 12px; padding: 0.9rem 1.6rem; border-radius: 44px; color: white; font-weight: 700; font-size: 1rem; text-decoration: none; cursor: pointer; background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 40%, #06b6d4 70%); background-size: 300% 100%; animation: bgShift 6s linear infinite, floatUpDown 3s ease-in-out infinite; box-shadow: 0 6px 18px rgba(11,20,40,0.45), 0 0 26px rgba(59,130,246,0.12), 0 0 48px rgba(139,92,246,0.09); backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.06); transition: transform 220ms cubic-bezier(.2,.9,.3,1), box-shadow 220ms ease; }
        @keyframes bgShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes floatUpDown { 0%{transform:translateY(0)} 25%{transform:translateY(-4px) rotate(-0.6deg)} 50%{transform:translateY(-8px) rotate(0.6deg)} 75%{transform:translateY(-4px) rotate(-0.4deg)} 100%{transform:translateY(0)} }
        .team-floating-btn::before{ content:""; position:absolute; left:-6%; top:-6%; width:112%; height:112%; border-radius:44px; z-index:-1; background: radial-gradient(circle at 20% 30%, rgba(99,102,241,0.12), transparent 18%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.08), transparent 18%); filter: blur(14px); opacity:0.95; animation: haloPulse 3.2s ease-in-out infinite; }
        .team-floating-btn::after{ content:""; position:absolute; inset:0; border-radius:44px; pointer-events:none; background: linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.18) 45%, rgba(255,255,255,0.06) 60%, transparent 100%); transform: translateX(-120%); animation: shimmer 3.2s linear infinite; mix-blend-mode: overlay; opacity:0.9; }
        @keyframes shimmer{ 0%{transform:translateX(-120%); opacity:0} 12%{opacity:0.35} 50%{transform:translateX(0%); opacity:0.9} 88%{opacity:0.35} 100%{transform:translateX(120%); opacity:0} }
        @keyframes haloPulse{ 0%{transform:scale(0.98); opacity:0.8} 50%{transform:scale(1.02); opacity:1} 100%{transform:scale(0.98); opacity:0.8} }
        .team-floating-btn .btn-icon{ display:inline-flex; align-items:center; justify-content:center; transform-origin:center; animation: iconSwing 3s ease-in-out infinite; z-index:1; }
        @keyframes iconSwing{ 0%{transform:translateY(0) rotate(0deg) scale(1)} 20%{transform:translateY(-2px) rotate(-6deg) scale(1.03)} 40%{transform:translateY(0) rotate(6deg) scale(1)} 60%{transform:translateY(-1px) rotate(-3deg) scale(1.02)} 80%{transform:translateY(0) rotate(3deg) scale(1)} 100%{transform:translateY(0) rotate(0deg) scale(1)} }
        .team-floating-btn .btn-label { opacity:1; transform:none; display:inline-block; color:#fff; text-shadow:0 1px 0 rgba(0,0,0,0.25); }
        .team-floating-btn:focus-visible { box-shadow: 0 18px 40px rgba(11,20,40,0.55), 0 0 72px rgba(59,130,246,0.16), 0 0 112px rgba(139,92,246,0.10); border:1px solid rgba(255,255,255,0.14); outline:none; }
        @media (max-width:768px) { .team-floating-btn{ top: calc(4.3rem + 12px); right:14px; padding:0.7rem 1rem; gap:8px; font-size:0.95rem; border-radius:36px } .team-floating-btn .btn-label{ font-size:0.92rem } }
      `}</style>
    </>
  );
}
