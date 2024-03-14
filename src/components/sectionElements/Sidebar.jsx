import { useState } from "react";
import { Link } from "react-scroll";
import { PropTypes } from 'prop-types';

export default function Sidebar({ showSidebar }) {


  return (
    <div
      className={`sidebar transition-transform transform ${
        showSidebar ? "animate-slide-down" : "animate-slide-up"
      }`}
    >
      <div className="mx-auto">
        <div
          className="flex w-64 h-auto px-12 py-6 mx-auto bg-white phone2:w-80 phone3:w-80 font-poppins"
        >
          <div className="overflow-y-auto">
            <ul className="text-black">
              <Link
                to="home"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <li className="mb-2">
                  <a href="home" className="hover:text-primary">
                    Início
                  </a>
                </li>
              </Link>
              <Link
                to="about"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-320}
              >
                <li className="mb-2">
                  <a href="about" className="hover:text-primary">
                    Sobre Nós
                  </a>
                </li>
              </Link>
              <Link
                to="services"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-320}
              >
                <li className="mb-2">
                  <a href="services" className="hover:text-primary">
                    Linha de Produtos
                  </a>
                </li>
              </Link>             
              <Link
                to="contact"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-390}
              >
                <li className="mb-2">
                  <a href="contact" className="hover:text-primary">
                    Cursos
                  </a>
                </li>
              </Link>
              <Link
                to="contact"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-390}
              >
                <li className="mb-2">
                  <a href="contact" className="hover:text-primary">
                    Perguntas Frequentes
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
};