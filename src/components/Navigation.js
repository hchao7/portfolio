import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        {/* I haven't worked on any pages besides Home and Topics,
        so I only added their links for now */}
        <Link to="/">Home</Link>
        <Link to="/pages/TopicPage.js">Topics</Link>
        <Link to="/pages/OrderPage.js">Order</Link>
        {/* <Link to="/pages/HomePage.js">Home</Link> */}
    </nav>
  );
}

export default Navigation;
