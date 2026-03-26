import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"

// Assets
import photo from '../../public/photo.jpg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'
import facebookLogo from '../../public/facebook.png'

export default function Home() {

  const professions = [
    'Data Analyst',
    'Full Stack Developer',
    'SQL Developer',
    'Data Visualization Enthusiast',
    'Problem Solver',
  ]

  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setText(professions[index])
      setIndex((prev) => (prev + 1) % professions.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [index])

  const quickLinks = [
    { img: githubLogo, link: 'https://github.com/sachinyaduvanshi0002/' },
    { img: linkedinLogo, link: 'https://www.linkedin.com/in/sachin-kumar-42756a364' },
    { img: gmailLogo, link: 'mailto:sachincseiot@gmail.com' },
    { img: whatsappLogo, link: 'https://wa.me/917549171480' },
    { img: instagramLogo, link: 'https://www.instagram.com/sachin_yaduvanshi0002/' },
    { img: facebookLogo, link: 'https://www.facebook.com/profile.php?id=100054782516915' },
  ]

  return (
    <section className="home-section">

      {/* Background Glow */}
      <div className="background-blur"></div>

      <div className="home-top">

        {/* LEFT PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="photo-frame"
          >
            <img src={photo} alt="Sachin Kumar" className="profile-photo" />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Transforming Data into <span className="gradient-text">Scalable Web Solutions</span>
          </h1>

          <h2 className="home-subtitle">
            Hi, I’m <span className="gradient-text">Sachin Kumar</span>
          </h2>

          <p className="typing-effect">{text}</p>

          {/* CTA */}
          <div className="cta-buttons">
            <a href="/projects" className="btn primary-btn">🚀 View Projects</a>
            <a href="/contact" className="btn secondary-btn">📩 Contact Me</a>
            <a href="/resume" className="btn secondary-btn">📄 View Resume</a>
          </div>

          {/* TAGS */}
          <div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.08 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </div>

          {/* INFO CARDS */}
          <div className="info-cards">
            <div className="info-card">
              <strong>📍 Location</strong>
              <p>Bihar, India</p>
            </div>
            <div className="info-card">
              <strong>💼 Role</strong>
              <p>Data & Web Dev</p>
            </div>
            <div className="info-card">
              <strong>⚡Contact</strong>
              <p>sachincseiot@gmail.com</p>
            </div>
          </div>

        </motion.div>
      </div>

      {/* QUICK LINKS */}
      <div className="quick-links">
        <h2 className="quick-links-title">Let’s Connect 🤝</h2>

        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <img src={item.img} className="quick-link-img" />
            </motion.a>
          ))}
        </div>
      </div>

    </section>
  )
}