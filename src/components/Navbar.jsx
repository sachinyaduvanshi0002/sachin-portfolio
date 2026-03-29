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

  // 🔥 Check overflow (unchanged)
  const checkOverflow = () => {
    if (window.innerWidth < 768) {
      setShowButton(true);
    } else {
      if (!navRef.current || !linksRef.current) return;
      setShowButton(
        linksRef.current.scrollWidth > navRef.current.offsetWidth
      );
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  // 🔥 Scroll Spy (unchanged)
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

  // 🔥 FIXED Smooth Scroll Function
  const handleClick = (id) => {
    setActive(id);
    setIsOpen(false);

    const el = document.querySelector(id);
    if (el) {
      const navbarHeight = navRef.current?.offsetHeight || 70;

      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
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
          zIndex: 100,
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
        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
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
              <motion.span
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
                animate={{
                  scale: active === l.to ? 1.1 : 1,
                  textShadow:
                    active === l.to
                      ? "0 0 8px var(--accent)"
                      : "none",
                }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 10px var(--accent)",
                }}
              >
                {l.label}

                {active === l.to && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: "absolute",
                      bottom: -5,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "var(--accent)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </motion.span>
            </a>
          ))}
        </div>

        {/* Hamburger */}
        {showButton && (
          <button
            onClick={() => setIsOpen((prev) => !prev)} // 🔥 FIX
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
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
              paddingTop: "4rem",
              zIndex: 9999,
              pointerEvents: "auto", // 🔥 FIX
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "2rem",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

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
                  textDecoration: "none",
                  padding: "1rem 0",
                  width: "100%",
                  textAlign: "center",
                  fontSize: 16,
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
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