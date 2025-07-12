// src/pages/About.jsx
import React from 'react'
import './About.css'

const About = () => {
  const skills = [
    { name: 'C++', level: 90, color: '#00599C' },
    { name: 'Java', level: 88, color: '#b07219' },
    { name: 'Python', level: 85, color: '#3776ab' },
    { name: 'Spring Boot', level: 83, color: '#6DB33F' },
    { name: 'MySQL', level: 82, color: '#00758F' },
    { name: 'HTML/CSS', level: 90, color: '#E44D26' },
    { name: 'Tailwind CSS', level: 84, color: '#38bdf8' },
    { name: 'AWS', level: 78, color: '#ff9900' },
    { name: 'Git', level: 80, color: '#F1502F' },
  ]

  const timeline = [
    {
      year: 'Jan 2025 – Present',
      title: 'Backend Engineer Intern',
      company: 'Atlas Consolidated',
      description:
        'Developing secure, scalable Spring Boot backend systems for digital metal asset trading. Integrated Redis caching and Amazon SQS to boost performance and fault tolerance.'
    },
    {
      year: '2021 – 2025',
      title: 'B.Tech in CSE',
      company: 'IIIT Guwahati',
      description:
        'Studied core CS concepts like OS, DBMS, CN, ML, Security, and HPC. Built multiple academic projects in C++, Java, and Python with real-world applications.'
    },
    {
      year: '2019 – 2021',
      title: 'Intermediate Education',
      company: 'Sri Chaitanya Junior Kalasala',
      description:
        'Completed with a score of 94.4%. Strengthened foundations in Mathematics, Physics, and Chemistry. Ranked top 1.5% in TS-EAMCET and 2% in COMEDK.'
    }
  ]

  return (
    <div className="about">
      <div className="about-container">
        <section className="about-hero">
          <div className="about-content">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              I'm Dhaipule Sujith Sai, a passionate engineer with a strong foundation in backend systems,
              now transitioning towards Data Science, AI, and ML. I enjoy building scalable software,
              diving into algorithms, and solving complex problems with smart, secure solutions.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="profile-card">
                <div className="card-header">
                  <div className="avatar">DS</div>
                  <div className="status-indicator"></div>
                </div>
                <div className="card-body">
                  <h3>Dhaipule Sujith Sai</h3>
                  <p>Backend Engineer | Aspiring AI/ML Researcher</p>
                  <div className="social-links">
                    <div className="social-icon">💼</div>
                    <div className="social-icon">🐙</div>
                    <div className="social-icon">📧</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 20px ${skill.color}40`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="timeline-section">
          <h2 className="section-title">Professional Journey</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-company">{item.company}</h4>
                  <p className="timeline-description">{item.description}</p>
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
              <h3>Mission</h3>
              <p>To solve real-world problems using technology and data-driven insights that benefit society.</p>
            </div>
            <div className="personal-card">
              <div className="card-icon">📈</div>
              <h3>Growth</h3>
              <p>Currently exploring ML, NLP, and Deep Learning. I believe in lifelong learning and consistent improvement.</p>
            </div>
            <div className="personal-card">
              <div className="card-icon">🎉</div>
              <h3>Community</h3>
              <p>Volunteered at Yuvaan and participated in Fit India movement. I believe personal health and teamwork foster innovation.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
