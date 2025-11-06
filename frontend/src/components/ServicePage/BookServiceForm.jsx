import React from "react";
import "./BookServicesForm.css";
const BookServiceForm = ({ serviceName, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">

        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Book {serviceName}</h2>

        <input placeholder="Your Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>

        <button className="submit-btn">Submit</button>

      </div>
    </div>
  );
};

export default BookServiceForm;
