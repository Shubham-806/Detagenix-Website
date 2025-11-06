import "./Home.css";
import { useEffect, useState } from "react";
import Testimonial from "../../components/Testimonial/Testimonial";

import Techslider from "../../components/Techslider/Techslider";

import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import Services from "../../components/Servicessection/Services.jsx";
import  servicesData  from "../../data/servicesData.js";

const Home = () => {
  // Stats data for the highlights section
  const stats = [
    { icon: "💼", number: "8+", label: "Services" },
    { icon: "🎓", number: "50+", label: "Interns Trained" },
    { icon: "⭐", number: "100+", label: "Projects" },
    { icon: "😊", number: "95%", label: "Client Satisfaction" },
    { icon: "🏆", number: "3+", label: "Years Experience" }
  ];

  return (
    <>
      {/* ✅ HERO SECTION */}
      <section className="hero-video-section">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-background-video"
          poster="/images/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay"></div>

        <div className="hero-content">
          <h1>Transforming Ideas into Digital Reality</h1>
          <p>We build cutting-edge web solutions, AI applications, and cloud services that drive business growth</p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">View Our Work</button>
          </div>
        </div>
      </section>
       {/* ✅ PORTFOLIO SECTION */}
      <PortfolioSection />


      {/* ✅ SERVICES SECTION */}
      <section className="services-section">
      <h1>Our Services</h1>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <Services 
            key={index}
            title={service.title}
            desc={service.desc}
            icon={service.icon}
            link={service.link}
          />
        ))}
      </div>
    </section>

     
      {/* ✅ HIGHLIGHTS/STATS SECTION */}
      <section className="stats-bar">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      

 {/* <Blogs blogs={blogs} loading={loading} /> */}
 
<Techslider />
      {/* ✅ TESTIMONIAL SECTION */}
      <Testimonial />
    </>
  );
};

export default Home;