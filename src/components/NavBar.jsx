import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-[rgb(17,34,64)] text-gray-400 fixed w-full z-50 px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="max-w-14 h-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#64FFDA"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-hexagon-letter-a z-10"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z" />
            <path d="M10 16v-6a2 2 0 1 1 4 0v6" />
            <path d="M10 13h4" />
          </svg>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 font-mono text-lg">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer transition-colors duration-300 hover:text-teal-300"
              >
                <span className="text-teal-400 mr-1">0{index + 1}.</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl text-teal-400 cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-[rgb(17,34,64)] px-8 py-6 shadow-lg z-40">
          <ul className="flex flex-col space-y-4 font-mono text-lg">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block text-gray-300 hover:text-teal-300"
                  onClick={closeMenu}
                >
                  <span className="text-teal-400 mr-1">0{index + 1}.</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
