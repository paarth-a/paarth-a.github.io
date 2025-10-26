import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:pahuja3@uwo.ca" className="contact-link">
                  pahuja3@uwo.ca
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-text">New York, NY</span>
              </div>
            </div>
          </div>
          <div className="social-links">
            <h3>Find me on</h3>
            <div className="social-grid">
              <a href="https://linkedin.com/in/paarth-ahuja" className="social-link linkedin">
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/paarth-a" className="social-link github">
                <span>GitHub</span>
              </a>
              <a href="mailto:pahuja3@uwo.ca" className="social-link email">
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>&copy; 2024 Paarth Ahuja. Built with React and deployed on GitHub Pages.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
