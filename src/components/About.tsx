import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Engineer at Bloomberg, where I focus on their core Developer Experience (DevX) team.
            </p>
            <p>
            </p>
            <div className="skills">
              <h3>Technologies I work with:</h3>
              <div className="skills-grid">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Go</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Hack</span>
                <span className="skill-tag">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
