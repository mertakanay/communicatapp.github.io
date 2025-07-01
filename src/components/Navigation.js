import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Communicat
        </Link>
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link 
            to="/contactus" 
            className={location.pathname === '/contactus' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
          <Link 
            to="/privacy" 
            className={location.pathname === '/privacy' ? 'nav-link active' : 'nav-link'}
          >
            Privacy
          </Link>
          <Link 
            to="/terms" 
            className={location.pathname === '/terms' ? 'nav-link active' : 'nav-link'}
          >
            Terms
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 