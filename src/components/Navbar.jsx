import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "#home" },
  { label: "Projects", to: "#projects" },
  { label: "Experience", to: "#experience" },
  { label: "Gallery", to: "#gallery" },
  { label: "Skills", to: "#skills" },
  { label: "Certificates", to: "#certificates" },
  { label: "Blog", to: "#blog" },
  { label: "Resume", to: "#resume" },
  { label: "About Me", to: "#about" },
  { label: "Contact", to: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [active, setActive] = useState("#home");

  const navRef = useRef(null);
  const linksRef = useRef(null);

  // 🔥 Mobile detect
  useEffect(() => {
    const check = () => {
      if (window.innerWidth < 768) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 🔥 Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => document.querySelector(l.to));

      sections.forEach((sec) => {
        if (!sec) return;

        const rect = sec.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          setActive("#" + sec.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 SAFE CLICK HANDLER
  const handleClick = (id) => {
    setActive(id);
    setIsOpen(false);

    try {
      const el = document.querySelector(id);

      if (!el) {
        console.log("Element not found:", id);
        return;
      }

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } catch (err) {
      console.log("Scroll error:", err);
    }
  };

  return (
    <>
      {/* 🔥 NAVBAR */}
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "1rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "var(--accent)",
            }}
          >
            SK
          </motion.div>

          <div>
            <h1 style={{ margin: 0, fontSize: 14 }}>Sachin Kumar</h1>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              Full Stack Dev • Data Analyst
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        {!showButton && (
          <div
            ref={linksRef}
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(l.to);
                }}
                style={{
                  textDecoration: "none",
                  color: active === l.to ? "var(--accent)" : "white",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}

        {/* Hamburger */}
        {showButton && (
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              zIndex: 9999,
              pointerEvents: "auto",
            }}
          >
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(l.to);
                }}
                style={{
                  color: active === l.to ? "var(--accent)" : "#fff",
                  fontSize: 18,
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}