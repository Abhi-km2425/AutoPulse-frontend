import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const showContact = window.location.pathname !== "/";
  return (
    <nav className="navbar">
      <div className="nav-container d-flex justify-space-between">
        <div className="nav-logo">AutoPulse</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/vehicles">My Vehicles</a>
          </li>
          <li>
            <a href="/services">My Services</a>
          </li>
          {showContact && (
            <li>
              <a href="#contact">
                <button className="btn-primary">Contact</button>
              </a>
            </li>
          )}
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>

      <div className="bottom-nav">
        <a href="/">Home</a>
        <a href="/vehicles">Vehicles</a>
        <a href="/services">Services</a>
        <a href="/login" ><CgProfile size={25}/></a>  
    
      </div>
    </nav>
  );
}

export default Navbar;
