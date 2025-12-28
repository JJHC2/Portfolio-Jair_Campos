import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white py-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="home" smooth={true} offset={-70} duration={500}>
            <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full"  />
          </Link>
        </div>

       
        <div className="lg:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`absolute top-16 left-0 w-full bg-primary text-white lg:static lg:flex lg:items-center lg:space-x-8 lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-center">
            <li className="py-2 lg:py-0">
              <Link
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                className="block hover:text-secondary cursor-pointer transition duration-300"
                onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                className="block hover:text-secondary cursor-pointer transition duration-300"
                onClick={() => setIsOpen(false)}>
                Acerca de Mi
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="projects"
                smooth={true}
                offset={-70}
                duration={500}
                className="block hover:text-secondary cursor-pointer transition duration-300"
                onClick={() => setIsOpen(false)}>
                Proyectos
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="block hover:text-secondary cursor-pointer transition duration-300"
                onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;