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
      <button onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu} className="relative">
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
          <div className={`animate-${showSubMenu ? 'fade-in' : 'fade-out'} duration-1000`}>
            {showSubMenu && (
                <ul className="absolute py-2 uppercase bg-white rounded shadow-2xl w-40 font-mainFont left-1/2 transform -translate-x-1/2">
                  <li>
                    <a
                      href="/hth"
                      target="_blank"
                      className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary transition duration-500"
                    >
                      <h1>HTH</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/genco"
                      target="_blank"
                      className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary transition duration-500"
                    >
                      <h1>Genco</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/neoclor"
                      target="_blank"
                      className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary transition duration-500"
                    >
                      <h1>Neoclor</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hidroazul"
                      target="_blank"
                      className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary transition duration-500"
                    >
                      <h1>Hidroazul</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/domclor"
                      target="_blank"
                      className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary transition duration-500"
                    >
                      <h1>Domclor</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/suall"
                      target="_blank"
                      className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary transition duration-500"
                    >
                      <h1>Suall</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sodramar"
                      target="_blank"
                      className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary transition duration-500"
                    >
                      <h1>Sodramar</h1>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/netuno"
                      target="_blank"
                      className="block px-4 py-2 text-center text-black cursor-pointer hover:text-primary hover:bg-quinary transition duration-500"
                    >
                      <h1>Netuno</h1>
                    </a>
                  </li>
                </ul>
            )}
          </div>

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
