import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/"><FaArrowAltCircleLeft /></NavLink>
      </nav>
    </div>
  );
}
