import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  const toggleSubMenu = (show) => {
    setShowSubMenu(show);
  };

  const handleLinkClick = (sectionId, offset) => {
    setScrolling(true);
    setTimeout(() => {
      const sectionTop = document.getElementById(sectionId).offsetTop + offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      setTimeout(() => {
        setScrolling(false);
      }, 500);
    }, 100);
  };

  return (
    <ul
      className={`h-14 my-auto flex items-center justify-end tablet1:items-center tablet1:flex-wrap tablet1:gap-2 tablet2:gap-4 desktop2:gap-8 w-full font-semibold text-paragraph3 font-poppins ${
        scrolling ? "" : "text-white transition-color duration-200"
      }`}
    >
      <li className="transition group">
        <Link
          to="/"
          onClick={() => handleLinkClick("home", 0)}
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
          to="/"
          onClick={() => handleLinkClick("about", -70)}
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
      <button
        onMouseEnter={() => toggleSubMenu(true)}
        onMouseLeave={() => toggleSubMenu(false)}
      >
        <li className="transition group">
          <Link
            to="/"
            onClick={() => handleLinkClick("products", -70)}
            className="relative py-4 cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <span
              className={`inline-block ${
                scrolling ? "hover:text-primary" : ""
              }`}
            >
              PRODUTOS E ACESSÓRIOS
            </span>
          </Link>
          <div
            className={`animate-${
              showSubMenu ? "fade-in" : "fade-out"
            } duration-1000`}
          >
            {showSubMenu && (
              <ul className="absolute py-3 mt-3 uppercase transform -translate-x-1/2 bg-white rounded-lg shadow-2xl w-52 font-mainFont left-1/2">
                <li>
                  <a
                    href="/hth"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    <h1>HTH</h1>
                  </a>
                </li>
                <li>
                  <a
                    href="/genco"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    <h1>Genco</h1>
                  </a>
                </li>
                <li>
                  <a
                    href="/neoclor"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    <h1>Neoclor</h1>
                  </a>
                </li>
                <li>
                  <a
                    href="/hidroazul"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    <h1>Hidroazul</h1>
                  </a>
                </li>
                <li>
                  <a
                    href="/domclor"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    <h1>Domclor</h1>
                  </a>
                </li>
                <li>
                  <a
                    href="/suall"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    <h1>Suall</h1>
                  </a>
                </li>
                <li>
                  <a
                    href="/sodramar"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 border-b cursor-pointer hover:text-primary hover:bg-quinary border-neutral-300"
                  >
                    <h1>Sodramar</h1>
                  </a>
                </li>
                <li>
                  <a
                    href="/netuno"
                    className="block w-[80%] mx-auto px-4 py-2 text-center text-tertiary transition duration-500 cursor-pointer hover:text-primary hover:bg-quinary"
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
          to="/"
          onClick={() => handleLinkClick("courses", -70)}
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>
            CURSOS E PALESTRAS
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
          to="/"
          onClick={() => handleLinkClick("faq", -70)}
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
          to="/"
          onClick={() => handleLinkClick("contact", -190)}
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-190}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>CONTATO</span>
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
