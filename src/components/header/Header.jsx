import React, { useState } from 'react'
import "./header.css";

const Header = () => {
    /* ============ Toggle Menu =============== */
    const[Toggle, showMenu] = useState(false);
    const[Toglle, showBackground] =useState(true)
      
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Etienne</a>
            <div className ={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#accueil" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i>Accueil
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#apropos" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>A propos
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>
                            Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>
                            Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>
                            Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times nav__close" 
                   onClick={() => showMenu(!Toggle)}></i>

            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header