import { Link } from "react-scroll";
import { PropTypes } from 'prop-types';

export default function Sidebar({ showSidebar }) {
  

  return (
    <div
      className={`sidebar transition-transform transform ${
        showSidebar ? "animate-slide-down" : "animate-slide-up"
      }`}
    >
      <div className="content">
        <div
          className="flex h-auto px-12 py-6 bg-white font-mainFont"
        >
          <div className="overflow-y-auto">
            <ul className="text-black phone2:text-paragraph5 phone3:text-title1 tablet1:text-title2">
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
                    Produtos
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
                    Contato
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