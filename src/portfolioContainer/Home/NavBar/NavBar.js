import React, { useState } from 'react';
import './NavBar.css';
import ContactMe from '../../ContactMe/ContactMe';
import AboutMe from '../../AboutMe/AboutMe';
import Project from '../../Projects/Project';
import Resume from '../../Resume/Resume'

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          PIERRE
        </a>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#aboutme" className="nav-link">
            About Me
          </a>
          <a href="#resume" className="nav-link">
            Resume
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contactme" className="nav-link">
            Hire Me
          </a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

