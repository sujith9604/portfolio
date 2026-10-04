import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { site, roles, stats } from '../data/site'
import './Home.css'

const Home = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[loopNum % roles.length]

      setDisplayText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      )

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed])

  const navigate = useNavigate()

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{site.name}</span>
            </h1>
            <div className="typing-container">
              <h2 className="typing-text">
                I'm a <span className="typed-text">{displayText}</span>
                <span className="cursor">|</span>
              </h2>
            </div>
            <p className="hero-description">{site.intro}</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/experience')}>
                View Experience
              </button>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="code-snippet">
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-content">
                  <span className="code-line">
                    <span className="keyword">const</span>{' '}
                    <span className="variable">engineer</span>{' '}
                    <span className="operator">=</span>{' '}
                    <span className="string">{'{'}</span>
                  </span>
                  <span className="code-line">
                    {'  '}<span className="property">name</span>
                    <span className="operator">:</span>{' '}
                    <span className="string">'{site.name}'</span><span className="operator">,</span>
                  </span>
                  <span className="code-line">
                    {'  '}<span className="property">stack</span>
                    <span className="operator">:</span>{' '}
                    <span className="string">['Java', 'Spring Boot', 'Kafka', 'MySQL']</span><span className="operator">,</span>
                  </span>
                  <span className="code-line">
                    {'  '}<span className="property">focus</span>
                    <span className="operator">:</span>{' '}
                    <span className="string">'Reliable backend systems'</span>
                  </span>
                  <span className="code-line">
                    <span className="string">{'}'}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
