import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
