import React, { useState } from 'react';
import './Techslider.css'; // Make sure this import path is correct

const Techslider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const techData = [
    {
      id: 1,
      icon: "🤖",
      name: "Artificial Intelligence",
      description: "AI systems that can perform tasks requiring human intelligence."
    },
    {
      id: 2,
      icon: "⛓️",
      name: "Blockchain",
      description: "Decentralized, distributed ledger technology for secure transactions."
    },
    {
      id: 3,
      icon: "☁️",
      name: "Cloud Computing",
      description: "On-demand delivery of IT resources over the internet."
    },
    {
      id: 4,
      icon: "🔒",
      name: "Cybersecurity",
      description: "Protection of internet-connected systems from digital attacks."
    },
    {
      id: 5,
      icon: "📱",
      name: "Mobile Development",
      description: "Creating applications for mobile devices and platforms."
    },
    {
      id: 6,
      icon: "🌐",
      name: "Web Development",
      description: "Building and maintaining websites and web applications."
    },
    {
      id: 7,
      icon: "📊",
      name: "Data Science",
      description: "Extracting insights from structured and unstructured data."
    },
    {
      id: 8,
      icon: "⚡",
      name: "Internet of Things",
      description: "Network of physical objects embedded with sensors and software."
    }
  ];

  const duplicatedSlides = [...techData, ...techData];

  return (
    <div className="tech-slider-container">
      <h1>Our Technology Stack</h1>
      
      <div 
        className={`slider-container ${isPaused ? 'paused' : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slider-track">
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