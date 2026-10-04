// src/pages/About.jsx
import React from 'react'
import { site, skills, education } from '../data/site'
import './About.css'

const initials = site.name
  .split(' ')
  .map((part) => part[0])
  .slice(0, 2)
  .join('')

const About = () => (
  <div className="about">
    <div className="about-container">
      <section className="about-hero">
        <div className="about-content">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">{site.intro}</p>
          <p className="about-description">
            I studied Computer Science at IIIT Guwahati, and I enjoy algorithms, databases, and
            understanding why systems are built the way they are.
          </p>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <div className="profile-card">
              <div className="card-header">
                <div className="avatar">{initials}</div>
                <div className="status-indicator"></div>
              </div>
              <div className="card-body">
                <h3>{site.name}</h3>
                <p>{site.title} | Fintech</p>
                <div className="social-links">
                  <a className="social-icon" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
                  <a className="social-icon" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">🐙</a>
                  <a className="social-icon" href={`mailto:${site.email}`} aria-label="Email">📧</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-resume">
          {skills.map((row) => (
            <div key={row.label} className="skills-row">
              <span className="skills-label">{row.label}</span>
              <span className="skills-items">{row.items.join(', ')}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((item) => (
            <div key={item.title} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{item.when}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-company">{item.where}</h4>
                <p className="timeline-description">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="personal-section">
        <h2 className="section-title">Beyond Code</h2>
        <div className="personal-grid">
          <div className="personal-card">
            <div className="card-icon">🎯</div>
            <h3>Focus</h3>
            <p>Reliable backend systems for regulated, data-sensitive products, with a long-term interest in healthtech.</p>
          </div>
          <div className="personal-card">
            <div className="card-icon">📈</div>
            <h3>Growth</h3>
            <p>Currently deepening my knowledge of databases, distributed systems, and system design, and learning how LLM features fit into backend services.</p>
          </div>
          <div className="personal-card">
            <div className="card-icon">🤝</div>
            <h3>Community</h3>
            <p>Volunteered at the Yuvaan cultural fest and took part in the Fit India movement. I believe teamwork and health help people do their best work.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default About
