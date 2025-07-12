import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = [
    'Backend Developer',
    'Spring Boot Engineer',
    'Data Science Enthusiast',
    'ML & AI Learner',
    'Problem Solver',
    'Tech Explorer'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setDisplayText(prev =>
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
  }, [displayText, isDeleting, loopNum, typingSpeed, roles])

  const navigate = useNavigate()

  const handleNavigate = (path, sectionId) => {
    // Store the target section in session storage
    sessionStorage.setItem('scrollTo', sectionId)
    navigate(path)
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Sujith Sai Dhaipule</span>
            </h1>
            <div className="typing-container">
              <h2 className="typing-text">
                I'm a <span className="typed-text">{displayText}</span>
                <span className="cursor">|</span>
              </h2>
            </div>
            <p className="hero-description">
              An aspiring engineer with a strong foundation in backend systems and a growing passion for AI, ML, and Data Science.
              I love building scalable, secure, and impactful applications.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => handleNavigate('/projects', 'projects')}>
                View My Work
              </button>
              <button className="btn-secondary" onClick={() => handleNavigate('/contact', 'contact')}>
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
                    <span className="variable">developer</span>{' '}
                    <span className="operator">=</span>{' '}
                    <span className="string">{'{'}</span>
                  </span>
                  <span className="code-line">
                    {'  '}<span className="property">name</span>
                    <span className="operator">:</span>{' '}
                    <span className="string">'Dhaipule Sujith Sai'</span><span className="operator">,</span>
                  </span>
                  <span className="code-line">
                    {'  '}<span className="property">skills</span>
                    <span className="operator">:</span>{' '}
                    <span className="string">['Spring Boot', 'C++', 'Java', 'Python']</span><span className="operator">,</span>
                  </span>
                  <span className="code-line">
                    {'  '}<span className="property">passion</span>
                    <span className="operator">:</span>{' '}
                    <span className="string">'AI & Secure Systems'</span>
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
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Technologies Learned</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Commitment</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
