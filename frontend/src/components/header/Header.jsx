import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const header = document.querySelector('.brand-navigation');
      if (header && !header.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className={`brand-navigation ${isMenuOpen ? 'open' : ''}`}>
      <div className="content">
        <img className="logo-nav" src={logo} alt="logo" />
        <h1 className="text-title">Pulse Beat</h1>

        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/Login" onClick={closeMenu}>
            Login
          </Link>
          <Link to="/Profile" onClick={closeMenu}>
            Perfil
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
