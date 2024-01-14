import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo-title">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className='title'>Pulse Beat</h1>
      </div>

      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Pesquisar..." />
      </div>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Cadastro">Cadastro</Link>
      </div>
    </header>
  );
}

export default Header;
