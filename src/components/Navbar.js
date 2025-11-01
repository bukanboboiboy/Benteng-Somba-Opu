import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // State untuk melacak status menu (terbuka/tertutup)
  const [menuOpen, setMenuOpen] = useState(false);

  // Fungsi untuk menutup menu setiap kali link diklik
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand" onClick={handleLinkClick}>
        Benteng Somba Opu
      </NavLink>
      
      {/* Tombol Hamburger (hanya muncul di mobile) */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Daftar Navigasi */}
      <ul className={menuOpen ? "navbar-nav active" : "navbar-nav"}>
        <li>
          <NavLink to="/" onClick={handleLinkClick}>Beranda</NavLink>
        </li>
        <li>
          <NavLink to="/galeri" onClick={handleLinkClick}>Galeri</NavLink>
        </li>
        <li>
          <NavLink to="/storytelling" onClick={handleLinkClick}>Storytelling</NavLink>
        </li>
        <li>
          <NavLink to="/event" onClick={handleLinkClick}>Event</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;