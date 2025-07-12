// src/pages/Contact.jsx
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await emailjs.send(
        'your_service_id',     // ✅ Replace this
        'your_template_id',    // ✅ Replace this
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'your_public_key'      // ✅ Replace this
      )
      console.log(result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error(error.text)
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus(''), 5000)
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'sujith9604@gmail.com',
      description: 'Drop me a line anytime',
      link: 'mailto:sujith9604@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 97044 65065',
      link: 'tel:+91 97044 65065'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Hyderabad, India',
      link: 'https://maps.google.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/sujith-sai',
      description: 'Let’s connect professionally',
      link: 'https://linkedin.com/in/sujith-sai'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/sujith9604',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/sujith-sai',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:sujith9604@gmail.com',
      color: '#ea4335'
    }
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
            <form className="contact-form" onSubmit={handleSubmit}>
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

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="loading-text">
                    <span className="spinner"></span>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <span className="success-icon">❌</span>
                  Sorry, we couldn't send your message. Please try again later or contact me directly at <a href="mailto:sujith9604@gmail.com">sujith9604@gmail.com</a>.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <span className="error-icon">❌</span>
                  Sorry, we couldn't send your message. Please try again later or contact me directly at <a href="mailto:sujith9604@gmail.com">sujith9604@gmail.com</a>.
                </div>
              )}
            </form>
          </div>
        </div>

        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Let’s Build Something Together</h2>
            <p className="cta-description">
              Whether it's a backend system, a data-driven solution, or an AI prototype — I’m excited to help bring your ideas to life.
            </p>
            <div className="cta-buttons">
              <a href="mailto:sujith9604@gmail.com" className="cta-btn primary">Start a Project</a>
              <a href="tel:+91 97044 65065" className="cta-btn secondary">Schedule a Call</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
