import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className="menu-icon" onClick={toggleMenu}>
        <IoIosMenu />
      </div>
      <ul className={`nav-menu ${menuOpen ? 'mobile-menu' : ''}`}>
        <li>
          <Link
            className='anchor-link'
            to='home'
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className='anchor-link'
            to='about'
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenuOpen(false)}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            className='anchor-link'
            to='services'
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className='anchor-link'
            to='mywork'
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className='anchor-link'
            to='contact'
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="nav-connect">
        <Link
          className='anchor-link'
          to='contact-right'
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => setMenuOpen(false)}
        >
          Connect with Me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
