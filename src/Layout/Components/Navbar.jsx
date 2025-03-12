
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-500 text-white p-4">
//       <div className="container mx-auto justify-center flex gap-8">
//         <Link to="/" className="hover:underline">
//           Home
//         </Link>
//         <Link to="/about" className="hover:underline">
//           About
//         </Link>
//         <Link to="/blog" className="hover:underline">
//           Blog
//         </Link>
//         <Link to="/services" className="hover:underline">
//           Services
//         </Link>
//         <Link to="/portfolio" className="hover:underline">
//           Portfolio
//         </Link>
//         <Link to="/careers" className="hover:underline">
//           Careers
//         </Link>
//         <Link to="/contact" className="hover:underline">
//           Contact
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;













import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4">
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
          className={`md:flex gap-8 absolute md:static left-0 w-full md:w-auto bg-blue-500 p-4 md:p-0 transition-all ${
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
