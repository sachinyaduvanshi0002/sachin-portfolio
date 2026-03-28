import React from 'react'
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

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main style={{ flex: 1 }}>

        <section id="home"><Home /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="gallery"><Gallery /></section>
        <section id="skills"><SkillNetwork /></section>
        <section id="certificates"><Certificates /></section>
        <section id="blog"><Blog /></section>
        <section id="resume"><Resume /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>

      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Sachin Kumar — Built with ❤️ using React
      </footer>
    </div>
  )
}