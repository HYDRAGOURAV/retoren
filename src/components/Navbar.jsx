import React, { useState } from "react";
import "../../public/css/Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUtensils } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1><FontAwesomeIcon className="MenuIcons" icon={faUtensils} /></h1>
        </div>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          
        </ul>

        <button className="mobile-menu-icon" onClick={toggleMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
