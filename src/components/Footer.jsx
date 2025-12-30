import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">

          <a
            href="https://github.com/JJHC2"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="fab fa-github text-2xl hover:text-secondary" />
          </a>
          <a
            href="www.linkedin.com/in/jair-campos-772976338"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="fab fa-github text-2xl hover:text-secondary" />
          </a>
          <a
            href="https://www.instagram.com/jaircampo_26?igsh=MXVpaTlnamJjZjRqeQ=="
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram className="fab fa-github text-2xl hover:text-secondary" />
          </a>
        </div>

        <p className="text-lg">
          &copy; {new Date().getFullYear()} Jair Campos.
        </p>
        <p className="text-sm">
          Elaborado por:
          <a
            href="www.linkedin.com/in/jair-campos-772976338"
            className="hover:text-black underline underline-offset-2">
            Jair Campos
          </a>
        </p>
        <p className="text-sm">
          Basado en elementos de <a href="https://github.com/saam-rgb" className="hover:text-black underline underline-offset-2">saam-rgb</a>, con ajustes y contenido original desarrollados íntegramente por mí.
        </p>
      </div>
    </footer>
  );
};

export default Footer;