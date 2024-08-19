import React from 'react';
import { Link } from 'gatsby';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-custom-nav-bar p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <button className="text-white font-judson font-bold hover:text-custom-dark-green transition text-3xl">
            Yanka Sikder
          </button>
        </Link>
        <div className="space-x-4">
          <Link to="/projects" className="nav-bar-button">
            Projects
          </Link>
          <Link to="/blogs" className="nav-bar-button">
            Blogs
          </Link>
          <Link to="/resume" className="nav-bar-button">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;