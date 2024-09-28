import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/pages/FrontEndProjectsPage.js">Front-End Projects</Link>
        <Link to="/pages/OtherProjectsPage.js">Chess Project</Link>
        <Link to="/pages/LeadershipPage.js">Leadership</Link>
    </nav>
  );
}

export default Navigation;
