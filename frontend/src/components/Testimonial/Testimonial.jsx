import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import { feedbackData } from "../../data/feedbackData";

const Testimonial = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list for smooth infinite sliding
  const duplicatedSlides = [...feedbackData, ...feedbackData];

  return (
    <div className="testimonial-tech-container">
      <h1>What Our Clients Say</h1>

      <div
        className={`testimonial-slider-wrapper ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="testimonial-track">
          {duplicatedSlides.map((item, index) => (
            <div key={item.id + "-" + index} className="testimonial-card-tech">
              <div className="testimonial-text">{item.feedback}</div>

              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < item.rating ? "filled-star" : "empty-star"}>
                    ★
                  </span>
                ))}
              </div>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} className="testimonial-avatar" />
                <p className="testimonial-name">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Testimonial;
