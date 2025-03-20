
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
          className={`md:flex gap-8 z-30 absolute md:static left-0 w-full md:w-auto bg-gray-500 p-4 md:p-0 transition-all ${
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


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(-1); // Track selected index
//   const services = [
//     "Web Development",
//     "Mobile App Development",
//     "UI/UX Design",
//     "SEO Optimization",
//     "Graphic Design",
//   ];

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (dropdownOpen) {
//         if (event.key === "ArrowDown") {
//           setSelectedIndex((prev) =>
//             prev < services.length - 1 ? prev + 1 : prev
//           );
//         } else if (event.key === "ArrowUp") {
//           setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
//         } else if (event.key === "Enter" && selectedIndex !== -1) {
//           alert(`You selected: ${services[selectedIndex]}`);
//           setDropdownOpen(false);
//           setSelectedIndex(-1);
//         }
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [dropdownOpen, selectedIndex]);

//   return (
//     <nav className="bg-gray-500 text-white p-4">
//       <div className="container mx-auto h-16 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-xl font-bold">Cloud Argo</h1>

//         {/* Menu Button for Mobile */}
//         <button
//           className="md:hidden text-xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`md:flex gap-8 z-30 absolute md:static left-0 w-full md:w-auto bg-gray-500 p-4 md:p-0 transition-all ${
//             isOpen ? "top-16" : "-top-96"
//           } md:top-auto`}
//         >
//           <li>
//             <Link
//               to="/"
//               className="block hover:underline"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className="block hover:underline"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/blog"
//               className="block hover:underline"
//               onClick={() => setIsOpen(false)}
//             >
//               Blog
//             </Link>
//           </li>

//           {/* Services with Dropdown and Keyboard Navigation */}
//           <li
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button className="block hover:underline flex items-center">
//               Services ▼
//             </button>

//             {dropdownOpen && (
//               <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-md rounded-md">
//                 {services.map((service, index) => (
//                   <li
//                     key={service}
//                     className={`cursor-pointer px-4 py-2 ${
//                       selectedIndex === index
//                         ? "bg-gray-300 font-bold"
//                         : "hover:bg-gray-200"
//                     }`}
//                   >
//                     {service}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <li>
//             <Link
//               to="/portfolio"
//               className="block hover:underline"
//               onClick={() => setIsOpen(false)}
//             >
//               Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/careers"
//               className="block hover:underline"
//               onClick={() => setIsOpen(false)}
//             >
//               Careers
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               className="block hover:underline"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
