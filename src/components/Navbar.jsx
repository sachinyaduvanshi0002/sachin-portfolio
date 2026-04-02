import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Navbar.css";

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

  const checkOverflow = () => {
    if (window.innerWidth < 768) {
      setShowButton(true);
      return;
    }

    if (!navRef.current || !linksRef.current) return;

    // Detect overflow inside links container so items never wrap into a second row.
    setShowButton(linksRef.current.scrollWidth > linksRef.current.clientWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

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

  const handleClick = (id) => {
    setActive(id);
    setIsOpen(false);

    const el = document.querySelector(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav ref={navRef} className="nav-shell">
        <div className="brand">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="brand-mark"
          >
            SK
          </motion.div>

          <div className="brand-copy">
            <h1>Sachin Kumar</h1>
            <div>Full Stack Dev • Data Analyst</div>
          </div>
        </div>

        <div ref={linksRef} className="nav-links" style={{ display: showButton ? "none" : "flex" }}>
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              onClick={(e) => {
                e.preventDefault();
                handleClick(l.to);
              }}
              className={`nav-link${active === l.to ? " is-active" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {showButton && (
          <button className="mobile-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
            {isOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mobile-menu"
          >
            <button onClick={() => setIsOpen(false)} className="mobile-menu__close" aria-label="Close menu">
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
                className={`mobile-menu__link${active === l.to ? " is-active" : ""}`}
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