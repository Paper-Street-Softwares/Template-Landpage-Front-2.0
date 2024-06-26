import { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import "primeicons/primeicons.css";
import {
  HelpCircle,
  HomeIcon,
  ServerIcon,
  UserSearch,
  AlignJustify,
} from "lucide-react";
import { Link } from "react-scroll";
import content from "../../content/content";

export default function SidebarClean() {
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="inset-0 z-10 flex ">
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-black opacity-50 lg:hidden`}
        onClick={toggleSidebar}
      />
      <div className="flex justify-center card">
        <AlignJustify
          className={`p-button-rounded p-button-outlined lg:hidden ${
            scrolled ? "text-primary" : "text-secondary"
          } w-[40px] h-[40px]`}
          onClick={() => setVisible(true)}
        />
        <Sidebar
          visible={visible}
          className="w-[280px]"
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              id="app-sidebar-2"
              className="absolute top-0 left-0 flex-shrink-0 h-screen select-none surface-section lg:hidden lg:static z-1 surface-border"
              style={{ width: "280px" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between flex-shrink-0 px-4 pt-4">
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={content.texts.navbar.solidLogo.img}
                      alt={content.texts.navbar.solidLogo.alt}
                      className="w-[200px] h-auto py-[15px] pr-[15px]"
                    />
                  </span>
                  <span>
                    <Button
                      type="button"
                      ref={closeIconRef}
                      onClick={(e) => hide(e)}
                      icon="pi pi-times"
                      rounded
                      outlined
                      className="h-2rem w-2rem p-[5px]"
                    ></Button>
                  </span>
                </div>
                <div className="h-screen overflow-y-auto">
                  <hr className="m-5 mx-3 border-top-1 surface-border" />
                  <ul className="p-3 m-0 list-none">
                    <li>
                      {submenuVisible && (
                        <ul className="p-0 m-0 -mt-[16px] overflow-hidden font-medium text-gray-700 list-none text-paragraph3 font-mainFont">
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
                                  <span className="h-[24px] inline-block">
                                    {content.texts.navbar.menuItems[0]}
                                  </span>{" "}
                                </Link>
                              </span>
                              <Ripple />
                            </a>
                          </li>
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
                                  offset={-80}
                                  href="#"
                                >
                                  <span className="h-[24px] inline-block">
                                    {content.texts.navbar.menuItems[1]}
                                  </span>{" "}
                                </Link>
                              </span>
                              <Ripple />
                            </a>
                          </li>
                          <ul className="p-0 m-0 list-none">
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
                                    offset={-80}
                                    href="#"
                                  >
                                    <span className="h-[24px] inline-block">
                                      {content.texts.navbar.menuItems[2]}
                                    </span>
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
                                    offset={-80}
                                    href="#"
                                  >
                                    <span className="h-[24px] inline-block">
                                      {content.texts.navbar.menuItems[3]}
                                    </span>{" "}
                                  </Link>
                                </span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </ul>
                      )}
                    </li>
                    {/* <hr className="mx-3 mb-3 border-top-1 surface-border" />
                    <a
                      v-ripple
                      className="bottom-0 left-0 flex items-center justify-center gap-2 p-3 m-3 transition-colors cursor-pointer phone2:absolute border-round text-700 hover:surface-100 transition-duration-150 p-ripple"
                    >
                      <img
                        src={content.texts.about.imagem.img}
                        alt={content.texts.about.imagem.alt}
                        className="w-[100%]"
                      />
                    </a> */}
                  </ul>
                </div>
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
    </div>
  );
}
