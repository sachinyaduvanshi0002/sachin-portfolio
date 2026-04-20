import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import "../CSS/projects.css";

const PROJECTS = [
  {
    category: 'web',
    title: '🛒 ByteBazaar - PERN Stack E-Commerce App',
    desc: 'Modern full-stack e-commerce-style app built with PERN stack, featuring dynamic UI, secure APIs, and cloud deployment.',
    ss: '/mamo.png',
    tech: ['PostgreSQL', 'Express', 'React', 'Node.js', 'Cloud Deployment'],
    live: 'https://bytebazaar-pern.onrender.com/',
    code: 'https://github.com/sachinyaduvanshi0002/Bytebazaar-pern'
  },
  {
    category: 'data',
    title: '📊 Mobile Sales Dashboard',
    desc: 'Interactive Power BI Mobile Sales Dashboard providing insights into sales performance, city-wise trends, brand analysis, and payment method distribution.',
    ss: '/mobile-sales.png',
    tech: ['Power BI Desktop', 'Microsoft Excel', 'DAX', 'Data Visualization'],
    live: '#',
    code: 'https://github.com/sachinyaduvanshi0002/Mobile_Sales_Dashboard'
  },
  {
    category: 'data',
    title: '🏏 IPL Analysis Dashboard (2008–2025)',
    desc: 'An interactive Power BI dashboard providing deep insights into IPL performance from 2008 to 2025.',
    ss: '/ipl.png',
    tech: ['Power BI', 'DAX', 'Data Modeling', 'Power Query', 'Microsoft Excel'],
    live: '#',
    code: 'https://github.com/sachinyaduvanshi0002/Ipl-Analysis-Dashboard'
  },
  {
    category: 'web',
    title: '💼 Flipkart UI Clone',
    desc: 'Pixel-perfect Flipkart UI frontend clone with responsive components, product cards, and navigation built using HTML, CSS and JavaScript.',
    ss: '/flipkart.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
    live: 'https://sachinyaduvanshi0002.github.io/Flipkart_UI_Clone/',
    code: 'https://github.com/sachinyaduvanshi0002/Flipkart_UI_Clone'
  },
  {
    category: 'web',
    title: '🎨 Sachin - Portfolio',
    desc: 'My personal portfolio website built with React and Framer Motion, showcasing my projects, skills, and experience with smooth animations and a modern design.',
    ss: '/portfolio.png',
    tech: ['React', 'Framer Motion', 'CSS', 'Responsive Design'],
    live: '#',
    code: 'https://github.com/sachinyaduvanshi0002/sachin-portfolio'
  },
  {
    category: 'data',
    title: '📊 excel-sales-dashboard',
    desc: 'A complete Excel Sales Dashboard with Pivot Tables, KPIs, Top/Bottom 5 Executives, Target Hit %, performance summary, and automated data visualizations.',
    ss: '/excel.png',
    tech: ['Microsoft Excel', 'Pivot Tables', 'Data Visualization'],
    live: '#',
    code: 'https://github.com/sachinyaduvanshi0002/excel-sales-dashboard'
  },
  {
    category: 'web',
    title: '📝 Todos List App',
    desc: 'A simple yet effective todo list application with local storage persistence and a clean UI.',
    ss: '/todo.png',
    tech: ['React', 'JavaScript', 'CSS'],
    live: 'https://sachinyaduvanshi0002.github.io/todos-list/',
    code: 'https://github.com/sachinyaduvanshi0002/todos-list'
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visibleProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS
    return PROJECTS.filter((project) => project.category === filter)
  }, [filter])

  const filters = [
    { label: 'All Work', value: 'all' },
    { label: 'Web Apps', value: 'web' },
    { label: 'Data Dashboards', value: 'data' },
  ]

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card projects-shell">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            Selected work across full-stack engineering and dashboard design, with a focus on clarity, polish, and real outcomes.
          </p>

          <div className="project-filters" role="tablist" aria-label="Project categories">
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                className={`project-filter${filter === item.value ? ' is-active' : ''}`}
                onClick={() => setFilter(item.value)}
                aria-pressed={filter === item.value}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="projects-grid">
          {visibleProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.div className="project-ss" whileHover={{ scale: 1.02 }}>
                <img src={project.ss} alt={project.title} loading="lazy" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn code-btn"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={14} />
                    Code
                  </motion.a>

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn live-btn"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={14} />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
