import { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import "primeicons/primeicons.css";
import { HelpCircle, HomeIcon, ServerIcon, UserSearch } from 'lucide-react';
import { Link } from "react-scroll";

export default function HeadlessDemo() {
  const [visible, setVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(true);
  const [reportsSubmenuVisible, setReportsSubmenuVisible] = useState(false);
  const [revenueSubmenuVisible, setRevenueSubmenuVisible] = useState(false);
  const [aplicationSubmenuVisible, setAplicationSubmenuVisible] =
    useState(true);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="inset-0 z-10 flex ">
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-black opacity-50 lg:hidden`}
        onClick={toggleSidebar}
      ></div>
      <div className="flex justify-center card ">
        <Button
          className={`p-button-rounded p-button-outlined text-[30px] lg:hidden ${scrolled ? 'text-black' : 'text-white'}`}
          icon="pi pi-bars"
          onClick={() => setVisible(true)}
        />
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              className="relative flex min-h-screen bg-blue-600 lg:hidden surface-ground"
              style={{ width: "280px" }}
            >
              <div
                id="app-sidebar-2"
                className="absolute top-0 left-0 flex-shrink-0 h-screen bg-white select-none surface-section lg:hidden lg:static z-1 border-right-1 surface-border"
                style={{ width: "280px" }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between flex-shrink-0 px-4 pt-3">
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className=" mt-[5px] "
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                      <span className="text-2xl font-semibold text-gray-700">
                      <Link
                    to="home"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    href="#"
                  >
                    Rita Almeida
                  </Link>
                      </span>
                    </span>
                    <span>
                      <Button
                        type="button"
                        ref={closeIconRef}
                        onClick={(e) => hide(e)}
                        icon="pi pi-times"
                        rounded
                        outlined
                        className="h-2rem w-2rem pt-[5px]"
                      ></Button>
                    </span>
                  </div>
                  <div className="overflow-y-auto">
                    <ul className="p-3 m-0 list-none">
                      <li>
                        {submenuVisible && (
                          <ul className="p-0 m-0 mt-[20px] text-paragraph3 overflow-hidden font-medium text-gray-700 list-none font-mainFont">
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <HomeIcon />
                                <span className="ml-[8px]">
                                <Link
                    to="home"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    href="#"
                  >
                    Início
                    </Link>
                  </span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <ServerIcon />
                                <span className="ml-[8px]">
                                <Link
                    to="service"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-300}
                    href="#"
                  >
                    Serviços
                  </Link>
                                  </span>
                                <Ripple />
                              </a>
                            </li>
                            <ul className="p-0 m-0 list-none">
                              <li>
                                <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                  <UserSearch />
                                  <span className="ml-[8px]">
                                  <Link
                    to="about"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-1000}
                    href="#"
                  >
                    Sobre Mim
                  </Link>
                                    </span>
                                  <Ripple />
                                </a>
                              </li>
                              <li>
                                <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                  <HelpCircle />
                                  <span className="ml-[8px]">
                                  <Link
                    to="faq"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-300}
                    href="#"
                  >
                    Perguntas Frequentes
                  </Link>
                                    </span>
                                  <Ripple />
                                </a>
                              </li>
                            </ul>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <hr className="mx-3 mb-3 border-top-1 surface-border" />
                    <a
                      v-ripple
                      className="flex items-center gap-2 p-3 m-3 transition-colors cursor-pointer border-round text-700 hover:surface-100 transition-duration-150 p-ripple"
                    >
                      <Avatar
                        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                        shape="circle"
                      />
                      <span className="font-bold">Paper Street</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
    </div>
  );
}
