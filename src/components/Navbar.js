// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">Benteng Somba Opu</NavLink>
      <ul className="navbar-nav">
        <li><NavLink to="/">Beranda</NavLink></li>
        <li><NavLink to="/galeri">Galeri</NavLink></li>
        <li><NavLink to="/storytelling">Storytelling</NavLink></li>
        <li><NavLink to="/event">Event</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;