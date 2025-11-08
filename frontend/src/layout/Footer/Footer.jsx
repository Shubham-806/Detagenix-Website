 import { Link } from "react-router-dom";
import "./Footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt ,FaMapMarkerAlt} from "react-icons/fa";
const Footer = () => {
  return (
    <footer class="footer">
  <div class="footer-container">

    <div class="footer-section">
      <h3>Detagenix</h3>
      <p>Your trusted partner in data-driven innovation and technology.</p>
    </div>

    <div class="footer-section quick-links">
      <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/careers">Careers</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
          </ul>
    </div>

    <div class="footer-section">
      <h4>Contact</h4>
      
 
  <ul>
    <li>
      <FaEnvelope className="footer-icon" /> contact@detagenix.com
    </li>

    <li>
      <FaPhoneAlt className="footer-icon" /> +91 8607997261
    </li>
    <li>
      <FaMapMarkerAlt className="footer-icon" />
      Indore, India
    </li>
  </ul>

      <div className="footer-social">
        <a 
          href="https://www.linkedin.com/company/detagenix/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a 
          href="https://www.instagram.com/detagenix?igsh=dXRhb2RyeTI0cmQ5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
    


  </div>

  <div class="footer-bottom">
   © {new Date().getFullYear()} Detagenix. All Rights Reserved.
  </div>
</footer>

  );
};

export default Footer;
 