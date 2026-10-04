// src/pages/Experience.jsx
import React from 'react'
import { job } from '../data/site'
import './Experience.css'

const Experience = () => (
  <div className="experience">
    <div className="experience-container">
      <section className="experience-hero">
        <h1 className="experience-title">Experience</h1>
      </section>

      <article className="job-card">
        <header className="job-header">
          <div>
            <h2 className="job-role">{job.role}</h2>
            <p className="job-company">
              {job.company} <span className="job-about">· {job.about}</span>
            </p>
          </div>
          <span className="job-period">{job.period}</span>
        </header>

        <p className="job-summary">{job.summary}</p>

        <ul className="job-points">
          {job.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="job-chips">
          {job.stack.map((tech) => (
            <span key={tech} className="job-chip">
              {tech}
            </span>
          ))}
        </div>
      </article>
    </div>
  </div>
)

export default Experience
