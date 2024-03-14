import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function ListGroup() {
  const [scrolling, setScrolling] = useState(false);

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

  return (
    <ul
      className={`flex items-end justify-end tablet1:items-end tablet1:flex-wrap tablet1:gap-2 tablet2:gap-4 desktop1:gap-6 desktop2:gap-8 w-full h-auto font-semibold text-paragraph3 font-poppins ${
        scrolling
          ? "text-black transition-color duration-1000"
          : "text-white transition-color duration-1000"
      }`}
    >
      <Link
        to="home"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        INÍCIO
      </Link>
      <Link
        to="about"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        SOBRE NÓS
      </Link>
      <Link
        to="services"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        SERVIÇOS
      </Link>
      <Link
        to="links"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        LINHAS DE PRODUTOS
      </Link>
      <Link
        to="certificates"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        CURSOS
      </Link>
      <Link
        to="contact"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-170}
      >
        PERGUNTAS FREQUENTES
      </Link>
    </ul>
  );
}