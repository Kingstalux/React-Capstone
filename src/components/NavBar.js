import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaMicrophoneAlt, FaWhmcs } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/"><FaArrowAltCircleLeft /></NavLink>
        <p>COVID-19 WORLD WIDE STATS - 2021</p>
        <div>
          <FaMicrophoneAlt />
          <FaWhmcs />
        </div>
      </nav>
    </div>
  );
}
