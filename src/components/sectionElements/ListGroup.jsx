import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function ListGroup() {
  const [scrolling, setScrolling] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <ul
      className={`flex items-end justify-end tablet1:items-end tablet1:flex-wrap tablet1:gap-2 tablet2:gap-4 desktop1:gap-6 desktop2:gap-8 w-full h-auto font-semibold text-paragraph3 font-poppins ${
        scrolling
          ? ""
          : "text-white transition-color duration-200"
      }`}
    >
      <li className="transition group">
        <Link
          to="home"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>INÍCIO</span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolling ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="about"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>
            SOBRE NÓS
          </span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolling ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </Link>
      </li>
      <button onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
        <li className="transition group">
        <Link
            to="products"
            className="relative cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
          <span className={scrolling ? 'hover:text-primary' : ''}>PRODUTOS</span>
          </Link>        
          {showSubMenu && (
            <ul className="absolute py-2 uppercase bg-white rounded shadow-2xl w-52 font-mainFont">
              <li>
                <a
                  href="/hth"
                  className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary"
                >
                  HTH
                </a>
              </li>
              <li>
                <a
                  href="/genco"
                  className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary"
                >
                  Genco
                </a>
              </li>
              <li>
                <a
                  href="/neoclor"
                  className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary"
                >
                  Neoclor
                </a>
              </li>
              <li>
                <a
                  href="/hidroazul"
                  className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary"
                >
                  Hidroazul
                </a>
              </li>
              <li>
                <a
                  href="/domclor"
                  className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary"
                >
                  Domclor
                </a>
              </li>
              <li>
                <a
                  href="/suall"
                  className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary"
                >
                  Suall
                </a>
              </li>
              <li>
                <a
                  href="/sodramar"
                  className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary"
                >
                  Sodramar
                </a>
              </li>
              <li>
                <a
                  href="/netuno"
                  className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary"
                >
                  Netuno
                </a>
              </li>
            </ul>
          )}
        </li>
      </button>
      <li className="transition group">
        <Link
          to="courses"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>CURSOS</span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolling ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="faq"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>
            PERGUNTAS FREQUENTES
          </span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolling ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="contact"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-190}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>
            CONTATO
          </span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolling ? "bg-primary" : "bg-white"
            }`}
          ></div>
        </Link>
      </li>
    </ul>
  );
}
