// src/pages/Contact.jsx
import React, { useState } from 'react'
import { site } from '../data/site'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // The form is not connected to anything yet: clicking Send just shows a message.
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitStatus('unavailable')
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: site.email,
      description: 'Drop me a line anytime',
      link: `mailto:${site.email}`
    },
    {
      icon: '📍',
      title: 'Location',
      value: site.location,
      link: `https://www.google.com/maps/search/${encodeURIComponent(site.location)}`
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: site.linkedin.replace('https://', ''),
      description: 'Let’s connect professionally',
      link: site.linkedin
    }
  ].filter(Boolean)

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: site.github, color: '#333' },
    { name: 'LinkedIn', icon: '💼', url: site.linkedin, color: '#0077b5' },
    { name: 'Email', icon: '📧', url: `mailto:${site.email}`, color: '#ea4335' }
  ]

  return (
    <div className="contact">
      <div className="contact-container">
        <section className="contact-hero">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Whether you're looking to collaborate on a project, share opportunities, or just have a tech chat — I'm always open to meaningful conversations.
          </p>
        </section>

        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Let's Connect</h2>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="contact-method"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <h3 className="method-title">{method.title}</h3>
                    <p className="method-value">{method.value}</p>
                    <p className="method-description">{method.description}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h3 className="social-title">Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--social-color': social.color }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2 className="section-title">Send Message</h2>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="6"
                  required
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>

              {submitStatus === 'unavailable' && (
                <div className="error-message" role="alert">
                  <span className="error-icon">⚠️</span>
                  <span>
                    Sorry, the contact form isn't working yet. Please email me at{' '}
                    <a href={`mailto:${site.email}`}>{site.email}</a> instead.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>

        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Let’s Build Something Together</h2>
            <p className="cta-description">
              Whether it's a backend system, a fintech problem, or a healthtech idea — I’m happy to talk it through.
            </p>
            <div className="cta-buttons">
              <a href={`mailto:${site.email}`} className="cta-btn primary">Start a Conversation</a>
              {site.phone && <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="cta-btn secondary">Schedule a Call</a>}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
