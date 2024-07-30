import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Nilanjan</h1>
            
            <ul className="footer__list">
                <li> 
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li> 
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/lm10_kingleo?igsh=ZmJuNWt1NjV1MjFv" className="footer__social-link" target="_blank">
        <i class="bx bxl-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/nilanjan-bhattacharya-401988208" className="footer__social-link" target="_blank">
        <i class="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://github.com/Nilanjan10" className="footer__social-link" target="_blank">
        <i class="uil uil-github-alt"></i>
        </a>
            </div>
            <span className="footer__copy">&#169;Nilanjan2024 All rights reserved</span>
        </div>
    </footer>
  );
};

export default Footer;