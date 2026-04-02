import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import "../CSS/projects.css";

const PROJECTS = [
  {
    title: '🛒 ByteBazaar - PERN Stack E-Commerce App',
    desc: 'Modern full-stack e-commerce-style app built with PERN stack, featuring dynamic UI, secure APIs, and cloud deployment.',
    ss: '/mamo.png',
    tech: ['PostgreSQL', 'Express', 'React', 'Node.js', 'Cloud Deployment'],
    live: 'https://bytebazaar-pern.onrender.com/',
    code: 'https://github.com/sachinyaduvanshi0002/Bytebazaar-pern'
  },
  {
    title: '📊 Mobile Sales Dashboard',
    desc: 'Interactive Power BI Mobile Sales Dashboard providing insights into sales performance, city-wise trends, brand analysis, and payment method distribution.',
    ss: '/mobile-sales.png',
    tech: ['Power BI Desktop', 'Microsoft Excel', 'DAX', 'Data Visualization'],
    live: '#',
    code: 'https://github.com/sachinyaduvanshi0002/Mobile_Sales_Dashboard'
  },
  {
    title: '🏏 IPL Analysis Dashboard (2008–2025)',
    desc: 'An interactive Power BI dashboard providing deep insights into IPL performance from 2008 to 2025.',
    ss: '/ipl.png',
    tech: ['Power BI', 'DAX', 'Data Modeling', 'Power Query', 'Microsoft Excel'],
    live: '#',
    code: 'https://github.com/sachinyaduvanshi0002/Ipl-Analysis-Dashboard'
  },
  {
    title: '💼 Flipkart UI Clone',
    desc: 'Pixel-perfect Flipkart UI frontend clone with responsive components, product cards, and navigation built using HTML, CSS and JavaScript.',
    ss: '/flipkart.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
    live: 'https://sachinyaduvanshi0002.github.io/Flipkart_UI_Clone/',
    code: 'https://github.com/sachinyaduvanshi0002/Flipkart_UI_Clone'
  },
  {
    title: '🎨 Sachin - Portfolio',
    desc: 'My personal portfolio website built with React and Framer Motion, showcasing my projects, skills, and experience with smooth animations and a modern design.',
    ss: '/portfolio.png',
    tech: ['React', 'Framer Motion', 'CSS', 'Responsive Design'],
    live: '#',
    code: 'https://github.com/sachinyaduvanshi0002/sachin-portfolio'
  },
  {
    title: '📊 excel-sales-dashboard',
    desc: 'A complete Excel Sales Dashboard with Pivot Tables, KPIs, Top/Bottom 5 Executives, Target Hit %, performance summary, and automated data visualizations.',
    ss: '/excel.png',
    tech: ['Microsoft Excel', 'Pivot Tables', 'Data Visualization'],
    live: '#',
    code: 'https://github.com/sachinyaduvanshi0002/excel-sales-dashboard'
  },
  {
    title: '📝 Todos List App',
    desc: 'A simple yet effective todo list application with local storage persistence and a clean UI.',
    ss: './todo.png',
    tech: ['React', 'JavaScript', 'CSS'],
    live: 'https://sachinyaduvanshi0002.github.io/todos-list/',
    code: 'https://github.com/sachinyaduvanshi0002/todos-list'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2 id="projects"
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — from full-stack applications to data dashboards, showcasing my skills in development, data analysis, and visualization.
        </p>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >          {PROJECTS.map((p, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
              border: '1px solid rgba(0,255,255,0.1)',
              borderRadius: 16,
              padding: 16,
              overflow: 'hidden',
              boxShadow: '0 0 20px rgba(0,255,255,0.08)'
            }}
          >
            <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
              <img
                src={p.ss}
                alt={p.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: 12
                }}
              />
            </motion.div>

            <div style={{ marginTop: 12 }}>
              <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: 'rgba(0,255,255,0.05)',
                      border: '1px solid rgba(0,255,255,0.1)',
                      padding: '3px 8px',
                      borderRadius: 6,
                      fontSize: 12,
                      color: '#aaf'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                <motion.a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  whileHover={{ scale: 1.08 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    background: 'rgba(255,255,255,0.05)',
                    color: '#0ea5e9',
                    padding: '6px 12px',
                    borderRadius: 8,
                    fontSize: 13,
                    border: '1px solid rgba(0,255,255,0.1)',
                    textDecoration: 'none'
                  }}
                >
                  <Github size={14} /> Code
                </motion.a>
                <motion.a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  whileHover={{ scale: 1.08 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: 8,
                    fontSize: 13,
                    textDecoration: 'none'
                  }}
                >
                  <ExternalLink size={14} /> Live
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </motion.section>
  )
}
