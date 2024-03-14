import { useState, useEffect } from "react";
import Navbar from "../sectionElements/Navbar";
import Logo from "../../assets/importAssets/Logo.png";
import ListGroup from "../sectionElements/ListGroup";
import Sidebar from "../sectionElements/Sidebar";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function NavbarSection() {
  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);
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
      setShowListGroup(false);
    } else {
      setShowListGroup(true);
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

  return (
    <div className="content">
      <div
        className={`fixed mt-32 z-10 w-full h-32 bg-white bg-opacity-0 ${
          scrolling
            ? "bg-opacity-100 shadow-lg bg-transition-opacity duration-1000"
            : ""
        }`}
      >
        <Navbar>
          <Link
            to="home"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <img
              src={Logo}
              alt="Logo"
              className={`absolute h-8 tablet1:h-10 -mt-4 ${
                scrolling ? "filter invert duration-1000" : ""
              }`}            />
          </Link>
          <button
            onClick={toggleSidebar}
            className="absolute right-0 mr-4 -top-4 tablet2:hidden"
          >
            {showMenuIcon ? (
              <Menu
                className={`w-8 h-8 ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              />
            ) : (
              <X
                className={`w-8 h-8 ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              />
            )}
          </button>
          {showListGroup ? <ListGroup /> : null}
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