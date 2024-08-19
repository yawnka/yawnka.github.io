import React from 'react';
import { Link } from 'gatsby';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;