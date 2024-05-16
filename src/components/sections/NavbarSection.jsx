import { useState, useEffect, useRef } from "react";
import Navbar from "../sectionElements/Navbar";
import Logo from "../../assets/importAssets/Logo.png";
import ListGroup from "../sectionElements/ListGroup";
import Sidebar from "../sectionElements/Sidebar";
import { Link as ScrollLink } from "react-scroll";
import HeadlessDemo from "../sectionElements/Sidebar2.0";
import { px } from "framer-motion";

export default function NavbarSection() {
  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sidebarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 60) {
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

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleCloseSidebar();
    }
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setShowSidebarContent(false);
    setIsAnimating(false);
    setShowMenuIcon(true);
  };

  const handleSidebarItemClick = () => {
    handleCloseSidebar();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className={`fixed z-20 w-full transition-colors duration-1000  ${
          scrolling
            ? 'bg-white bg-opacity-100 shadow-lg -mt-20 transition-all duration-1000'
            : 'transition-all duration-1000'
        }`}
      >
        <Navbar>
          <ScrollLink
            to="home"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            href="#"
          >
            <img
              src={Logo}
              alt="Logo MPA Piscinas"
              className={`mt-3 ${
                scrolling
                  ? "h-[36px] max-h-[36px] transition-all duration-1000 bg-black"
                  : "h-[60px] max-h-[60px] transition-all duration-1000"
              } tablet3:mb-0`}
            />
          </ScrollLink>
          <HeadlessDemo />
          {showListGroup ? <ListGroup /> : null}
        </Navbar>
        <div className="flex "></div>
        <div
          className={`animate-${
            showSidebar ? "slide-down block" : "slide-up hidden"
          }`}
          ref={sidebarRef}
        >
          {showSidebar ? (
            <Sidebar
              showSidebar={showSidebarContent}
              handleCloseSidebar={handleCloseSidebar}
              handleSidebarItemClick={handleSidebarItemClick}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
