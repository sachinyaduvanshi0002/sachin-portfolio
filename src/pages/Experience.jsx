import React from "react";
import { motion } from "framer-motion";
import "../CSS/experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Data Analysis Intern",
      company: "Cognifyz Technologies",
      duration: "Feb 2026",
      description:
        "Working on real-world data analysis and visualization projects, transforming raw datasets into actionable insights. Developed interactive dashboards using Power BI and SQL to support data-driven decision-making and improve business performance.",
      certificate: "#",
    },
    {
      role: "Data Analyst",
      company: "NoviTech R&D Pvt. Ltd",
      duration: "Dec 2025 - Feb 2026",
      description:
        "Performed data cleaning, transformation, and analysis using Excel, SQL, and Power BI. Designed insightful dashboards and reports to identify trends, optimize operations, and support strategic business decisions.",
      certificate: "https://drive.google.com/file/d/1fCcmAP8uheyJvLvgSZnTA8jkFGGXK14W/view",
    },
    {
      role: "Web Design Technologies",
      company: "Polytropic Services Pvt. Ltd",
      duration: "June 2025",
      description:
        "Built responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React. Worked on real-time projects, enhancing UI/UX design skills and gaining hands-on experience in modern web development practices.",
      certificate: "https://drive.google.com/file/d/1-J7qVOlIpMxCpMJf7iiIQK3K6OgO4yYG/view",
    },
  ];

  return (
    <section id="experience" className="experience-container">
      <div className="experience-card">
        <h1 className="experience-title">Experience</h1>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <h2 className="timeline-role">{exp.role}</h2>
                <p className="timeline-company">{exp.company}</p>

                <span className="timeline-duration">{exp.duration}</span>

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-link"
                  >
                    📄 Certificate
                  </a>
                )}

                <p className="timeline-desc">• {exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}