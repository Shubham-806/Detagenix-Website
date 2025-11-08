import React from 'react';
import './Techslider.css';

const Techslider = () => {

  const techData = [
    { id: 1, icon: "🤖", name: "Artificial Intelligence", description: "AI systems that can perform tasks requiring human intelligence." },
    { id: 2, icon: "⛓️", name: "Blockchain", description: "Decentralized ledger technology for secure transactions." },
    { id: 3, icon: "☁️", name: "Cloud Computing", description: "On-demand IT resources over the internet." },
    { id: 4, icon: "🔒", name: "Cybersecurity", description: "Protection of systems from digital attacks." },
    { id: 5, icon: "📱", name: "Mobile Development", description: "Creating applications for mobile devices." },
    { id: 6, icon: "🌐", name: "Web Development", description: "Building websites and applications." },
    { id: 7, icon: "📊", name: "Data Science", description: "Extracting insights from data." },
    { id: 8, icon: "⚡", name: "Internet of Things", description: "Network of connected smart devices." },
  ];

  const duplicatedSlides = [...techData, ...techData];

  return (
    <div className="tech-slider-container">
      <h1>Our Technology Stack</h1>

      <div className="slider-container marquee-mode">
        <div className="slider-track marquee-scroll">
          {duplicatedSlides.map((tech, index) => (
            <div key={`${tech.id}-${index}`} className="slide">
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
              <div className="tech-desc">{tech.description}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Techslider;
