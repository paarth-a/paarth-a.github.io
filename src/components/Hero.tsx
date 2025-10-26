import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Paarth Ahuja</span>
          </h1>
          <h2 className="hero-subtitle">
            Software Engineer at Bloomberg
          </h2>
          <p className="hero-description">
            Software engineer at Bloomberg, driving developer productivity tooling. Currently building agentic tools to help engineers be more productive. 
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#experience" className="btn btn-outline">View Experience</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <img 
              src="logos/paarth-dp.jpeg" 
              alt="Paarth Ahuja" 
              className="profile-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            <div className="avatar-placeholder hidden">
              <span>PA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
