import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
function Navbar() {
  const location = useLocation();
  const showContact = location.pathname !== "/";
  return (
    <nav className="navbar">
      <div className="nav-container d-flex justify-space-between">
        <div className="nav-logo">AutoPulse</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vehicles">My Vehicles</Link>
          </li>
          <li>
            <Link to="/services">My Services</Link>
          </li>
          {showContact && (
            <li>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary">
                  <FaWhatsapp />
                  WhatsApp
                </button>
              </a>
            </li>
          )}
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

      <div className="bottom-nav">
        <Link to="/">Home</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/services">Services</Link>
        <Link to="/login">
          <CgProfile size={25} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
