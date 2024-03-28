import { useState, useEffect } from "react";
import Navbar from "../sectionElements/Navbar";
import Logo from "../../assets/importAssets/Logo.png";
import ListGroupProducts from "../sectionElements/ListGroupProducts";
import Sidebar from "../sectionElements/Sidebar";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavbarSectionProducts() {
  const [scrolling, setScrolling] = useState(false);
  const [showListGroupProducts, setShowListGroupProducts] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleSidebar = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowMenuIcon(!showMenuIcon);
      setShowSidebarContent(!showSidebarContent);
      if (showSidebar) {
        setTimeout(() => {
          setShowSidebar(false);
          setIsAnimating(false);
        }, 950);
      } else {
        setShowSidebar(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 0);
      }
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowListGroupProducts(false);
    } else {
      setShowListGroupProducts(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (sectionId, offset) => {
    setScrolling(true);
    setTimeout(() => {
      const sectionTop = document.getElementById(sectionId).offsetTop + offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
      setTimeout(() => {
        setScrolling(false);
      }, 50);
    }, 10);
  };

  return (
    <div className="full">
      <div
        className={`fixed z-20 top-0 w-full bg-white bg-opacity-0 ${
          scrolling
            ? "bg-opacity-100 shadow-lg bg-transition-opacity duration-1000"
            : ""
        }`}
      >
        <Navbar>
          <Link
            to="/"
            onClick={() => handleLinkClick("home", 0)}
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img src={Logo} alt="Logo" className={`${
                scrolling ? "h-auto max-h-14 transition-all duration-1000" : "h-auto max-h-28 transition-all duration-1000"
              } tablet3:mb-0`} />
          </Link>
          <button
            onClick={toggleSidebar}
            className="absolute right-6 tablet2:hidden"
          >
            {showMenuIcon ? (
              <Menu size={32}
                className={` ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              />
            ) : (
              <X size={32}
                className={` ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              />
            )}
          </button>
          {showListGroupProducts ? <ListGroupProducts /> : null}
        </Navbar>
        <div
          className={`animate-${
            showSidebar ? "slide-down block" : "slide-up hidden"
          }`}
        >
          {showSidebar ? <Sidebar showSidebar={showSidebarContent} /> : null}
        </div>
      </div>
    </div>
  );
}