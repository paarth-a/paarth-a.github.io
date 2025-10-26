import React from 'react';
import './Experience.css';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  logo: string;
  current: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Bloomberg',
      position: 'Software Engineer',
      duration: '2023 - Present',
      location: 'New York, NY',
      description: 'Developer Experience and Productivity (DevX/DevEx). Building tools to help engineers be more productive.',
      skills: ['Python', 'C++', 'Java', 'Go', 'React'],
      logo: 'B',
      current: true
    },
    {
      company: 'Meta',
      position: 'Software Engineer Intern',
      duration: 'Sep 2022 - Dec 2022',
      location: 'San Francisco, CA',
      description: 'Worked on Meta Pay platform, contributing to payment infrastructure and user experience.',
      skills: ['C++', 'React', 'Hack', 'GraphQL'],
      logo: 'M',
      current: false
    },
    {
      company: 'Bloomberg',
      position: 'Software Engineer Intern',
      duration: 'Jun 2022 - Aug 2022',
      location: 'New York, NY',
      description: 'Securities permissions and big data tooling for financial data processing.',
      skills: ['Python', 'C++', 'JavaScript'],
      logo: 'B',
      current: false
    },
    {
      company: 'Amazon',
      position: 'Software Development Engineer Intern',
      duration: 'May 2021 - Aug 2021',
      location: 'Remote',
      description: 'Worked on the Performance Advertising Team, optimizing ad delivery systems.',
      skills: ['Python', 'C++', 'Java'],
      logo: 'A',
      current: false
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.current ? 'current' : ''}`}>
              <div className="timeline-marker">
                <div className="company-logo">
                  <img 
                    src={`/logos/${exp.company.toLowerCase()}-logo.png`} 
                    alt={`${exp.company} logo`}
                    className="company-logo-img"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Try .jpeg extension if .png fails
                      if (target.src.endsWith('.png')) {
                        target.src = target.src.replace('.png', '.jpeg');
                        return;
                      }
                      // If both fail, show fallback
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <span className="company-logo-fallback hidden">{exp.logo}</span>
                </div>
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.position}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="duration">{exp.duration}</span>
                  </div>
                  <span className="location">{exp.location}</span>
                </div>
                <p className="description">{exp.description}</p>
                <div className="skills">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
