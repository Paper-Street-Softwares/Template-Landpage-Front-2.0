import React, { useState, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import "primeicons/primeicons.css";

export default function HeadlessDemo() {
  const [visible, setVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(true); // controla a visibilidade do submenu
  const [reportsSubmenuVisible, setReportsSubmenuVisible] = useState(false);
  const [revenueSubmenuVisible, setRevenueSubmenuVisible] = useState(false);
  const [aplicationSubmenuVisible, setAplicationSubmenuVisible] =
    useState(true);

  const toggleSidebar = () => {
    // Escurece o fundo do site
    setVisible(!visible);
  };
  const toggleSubmenu = () => {
    setSubmenuVisible((prev) => !prev); // Alterna o estado do submenu
  };
  const toggleReportsSubmenu = () => {
    setReportsSubmenuVisible((prev) => !prev); // Alterna o submenu "Reports"
  };
  const toggleRevenueSubmenu = () => {
    setRevenueSubmenuVisible((prev) => !prev); // Alterna o submenu "Revenue"
  };
  const toggleaplicationSubmenu = () => {
    setAplicationSubmenuVisible((prev) => !prev); // Alterna o submenu "Reports"
  };

  return (
    <div className=" inset-0 flex z-10">
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-black opacity-50 lg:hidden`}
        onClick={toggleSidebar}
      ></div>
      <div className="card flex justify-center ">
        <Button
          className="p-button-rounded p-button-outlined text-red-900 text-[30px] lg:hidden "
          icon="pi pi-bars"
          onClick={() => setVisible(true)}
        />
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              className=" bg-blue-600 min-h-screen flex relative lg:hidden surface-ground"
              style={{ width: "280px" }}
            >
              <div
                id="app-sidebar-2"
                className="surface-section h-screen lg:hidden flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none bg-white"
                style={{ width: "280px" }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-4 pt-3 flex-shrink-0">
                    <span className="inline-flex items-center  gap-2">
                      <svg
                        className=" mt-[5px] "
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                      <span className="font-semibold text-2xl text-cyan-500">
                        Your Logo
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
                    <ul className="list-none p-3 m-0">
                      <li>
                        <StyleClass>
                          <div
                            className="p-ripple p-3 flex items-center justify-between text-600 cursor-pointer"
                            onClick={toggleSubmenu}
                          >
                            <span className=" font-mainFont text-gray-700 ">
                              FAVORITES
                            </span>
                            <i className="pi pi-chevron-down"></i>
                            <Ripple />
                          </div>
                        </StyleClass>
                        {submenuVisible && (
                          <ul className="list-none p-0 m-0 overflow-hidden font-mainFont font-medium text-gray-700">
                            <li>
                              <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-home mr-2"></i>
                                <span className="">Dashboard</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-bookmark mr-2"></i>
                                <span className="">Bookmarks</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <StyleClass>
                                <div
                                  className="p-ripple p-3 flex items-center justify-between text-600 cursor-pointer"
                                  onClick={toggleReportsSubmenu}
                                >
                                  <span className="">
                                    <i className="pi pi-chart-line mr-[9px] "></i>
                                    Reports
                                  </span>
                                  <i className="pi pi-chevron-down"></i>
                                  <Ripple />
                                </div>
                              </StyleClass>
                              {reportsSubmenuVisible && (
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                  <li>
                                    <StyleClass>
                                      <div
                                        className="p-ripple p-3 ml-[20px] flex items-center justify-between text-600 cursor-pointer"
                                        onClick={toggleRevenueSubmenu}
                                      >
                                        <span className="">
                                          <i className="pi pi-chart-line mr-2"></i>
                                          Revenue
                                        </span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple />
                                      </div>
                                    </StyleClass>
                                    {revenueSubmenuVisible && (
                                      <ul className="list-none py-0 pl-3 pr- m-0  overflow-y-hidden transition-all duration-500 ease-in-out">
                                        <li>
                                          <a className="p-ripple flex items-center cursor-pointer p-3 pl-[15%] border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-table mr-2"></i>
                                            <span className="">View</span>
                                            <Ripple />
                                          </a>
                                        </li>
                                        <li>
                                          <a className="p-ripple flex items-center cursor-pointer p-3 pl-[15%] border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-search mr-2"></i>
                                            <span className="">Search</span>
                                            <Ripple />
                                          </a>
                                        </li>
                                      </ul>
                                    )}
                                  </li>
                                  <li>
                                    <a className="p-ripple flex items-center cursor-pointer p-3 ml-[20px] border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                      <i className="pi pi-chart-line mr-2"></i>
                                      <span className="">Expenses</span>
                                      <Ripple />
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </li>
                            <ul className="list-none p-0 m-0 ">
                              <li>
                                <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                  <i className="pi pi-users mr-2"></i>
                                  <span className="">Team</span>
                                  <Ripple />
                                </a>
                              </li>
                              <li>
                                <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                  <i className="pi pi-comments mr-2"></i>
                                  <span className="">Messages</span>
                                  <span
                                    className="inline-flex items-center justify-center ml-auto bg-blue-500 text-white rounded-[15px]"
                                    style={{
                                      minWidth: "1.5rem",
                                      height: "1.5rem",
                                    }}
                                  >
                                    3
                                  </span>
                                  <Ripple />
                                </a>
                              </li>
                              <li>
                                <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                  <i className="pi pi-calendar mr-2"></i>
                                  <span className="">Calendar</span>
                                  <Ripple />
                                </a>
                              </li>
                              <li>
                                <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                  <i className="pi pi-cog mr-2"></i>
                                  <span className="">Settings</span>
                                  <Ripple />
                                </a>
                              </li>
                            </ul>
                          </ul>
                        )}
                      </li>
                    </ul>
                    <ul className="list-none p-3 m-0">
                      <li>
                        <StyleClass>
                          <div
                            className="p-ripple p-3 flex items-center justify-between text-600 cursor-pointer font-mainFont text-gray-700"
                            onClick={toggleaplicationSubmenu}
                          >
                            <span className="">APLICATION</span>
                            <i className="pi pi-chevron-down"></i>
                            <Ripple />
                          </div>
                        </StyleClass>
                        {aplicationSubmenuVisible && (
                          <ul className="list-none p-0 m-0 overflow-hidden font-mainFont text-gray-700">
                            <li>
                              <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-folder mr-2"></i>
                                <span className="">Projects</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-bar mr-2"></i>
                                <span className="">Performance</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-cog mr-2"></i>
                                <span className="">Settings</span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <hr className="mb-3 mx-3 border-top-1 surface-border" />
                    <a
                      v-ripple
                      className="m-3 flex items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
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
