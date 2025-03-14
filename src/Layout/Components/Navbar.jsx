
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-500   text-white p-4">
      <div className="container mx-auto h-16 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Cloud Argo</h1>

        {/* Menu Button for Mobile */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex gap-8 absolute md:static left-0 w-full md:w-auto bg-gray-500 p-4 md:p-0 transition-all ${
            isOpen ? "top-16" : "-top-96"
          } md:top-auto`}
        >
          <li>
            <Link
              to="/"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
