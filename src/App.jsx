import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Gallery from './pages/Gallery'
import SkillNetwork from './pages/Skills'
import Certificates from './pages/Certificates'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'

const SITE_TITLE = 'Sachin Kumar | Data Analyst & Full Stack Developer'
const SITE_DESCRIPTION =
  'Portfolio of Sachin Kumar - a data analyst and full stack developer building polished, responsive web experiences and dashboards.'

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem('portfolio-theme') || 'dark'
  })
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    document.title = SITE_TITLE

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = SITE_DESCRIPTION

    let themeColor = document.querySelector('meta[name="theme-color"]')
    if (!themeColor) {
      themeColor = document.createElement('meta')
      themeColor.name = 'theme-color'
      document.head.appendChild(themeColor)
    }
    themeColor.content = theme === 'light' ? '#f5f7fb' : '#050816'
  }, [theme])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
    document.documentElement.style.colorScheme = theme === 'light' ? 'light' : 'dark'
  }, [theme])

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setShowScrollTop(scrollTop > 300)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    const revealTimer = window.setTimeout(() => setLoading(false), 650)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      window.clearTimeout(revealTimer)
    }
  }, [])

  return (
    <div className="app">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <main className="app-main">
        <Home />
        <div className="section-shell section-shell--projects">
          <Projects />
        </div>
        <div className="section-shell section-shell--experience">
          <Experience />
        </div>
        <div className="section-shell section-shell--gallery">
          <Gallery />
        </div>
        <div className="section-shell section-shell--skills">
          <SkillNetwork />
        </div>
        <div className="section-shell section-shell--certificates">
          <Certificates />
        </div>
        <div className="section-shell section-shell--blog">
          <Blog />
        </div>
        <div className="section-shell section-shell--resume">
          <Resume />
        </div>
        <div className="section-shell section-shell--about">
          <About />
        </div>
        <div className="section-shell section-shell--contact">
          <Contact />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-copy">© {new Date().getFullYear()} Sachin Kumar</div>
        <div className="footer-links">
          <a href="/resume.pdf" download>Resume</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>

      <AnimatePresence>
        {loading && (
          <motion.div
            className="app-loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="app-loading__logo"
              initial={{ scale: 0.85, opacity: 0.6 }}
              animate={{ scale: [0.95, 1.05, 0.95], opacity: 1 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              SK
            </motion.div>
            <div className="app-loading__text">Loading portfolio</div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            className="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.9 }}
            transition={{ duration: 0.22 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}