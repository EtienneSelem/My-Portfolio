import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Etienne</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">A Propos</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projets</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://www.twitter.com/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; SelemDeveloper. Tout droit réservé</span>
        </div>
    </footer>
  )
}

export default Footer