import React from 'react';
import './Testimonial.css';
import { feedbackData } from '../../data/feedbackData';

const Testimonial = () => {

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span 
            key={index} 
            className={`star ${index < rating ? 'filled' : ''}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="client-feedback">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Hear from businesses we've helped transform</p>
        
        <div className="feedback-cards">
          {feedbackData.map(client => (
            <div key={client.id} className="feedback-card">
              <div className="card-content">
                <div className="quote-icon">"</div>
                <p className="feedback-text">{client.feedback}</p>
                
                <div className="client-info">
                  {/* <div className="client-image">
                    <img src={client.image} alt={client.name} />
                  </div> */}
                  <div className="client-details">
                    <h3 className="client-name">{client.name}</h3>
                    <p className="client-role">{client.role}</p>
                    <p className="client-company">{client.company}</p>
                    {renderStars(client.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;