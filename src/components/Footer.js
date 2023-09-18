import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/mujahidkhan7601">
          <FaFacebook />
        </a>
        <a href="https://www.youtube.com/@Informationdotcom76">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/mujahidislam7601">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
