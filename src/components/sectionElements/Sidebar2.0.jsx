import React, { useState, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import "primeicons/primeicons.css";

export default function HeadlessDemo() {
  const [visible, setVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(false); // controla a visibilidade do submenu
  const [reportsSubmenuVisible, setReportsSubmenuVisible] = useState(false);
  const [revenueSubmenuVisible, setRevenueSubmenuVisible] = useState(false);
  const [aplicationSubmenuVisible, setAplicationSubmenuVisible] =
    useState(false);

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
    <div className="fixed inset-0 flex items-center z-10">
      {/* Camada de fundo escurecida */}
      <div
        className={`${
          visible ? "block" : "hidden"
        } absolute inset-0 bg-black opacity-50`}
        onClick={toggleSidebar}
      ></div>
      <div className="card flex justify-center ">
        <Button
          className="p-button-rounded p-button-outlined bg-red-700 border-black rounded-md py-[2px] px-[4px]"
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
                className="surface-section h-screen lg:hidden flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none bg-red-600"
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
                      <span className="font-semibold text-2xl text-black">
                        Paper Street
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
                        <StyleClass
                          selector="@next"
                          enterClassName="hidden"
                          enterActiveClassName="slidedown"
                          leaveToClassName="hidden"
                          leaveActiveClassName="slideup"
                        >
                          <div
                            className="p-ripple p-3 flex items-center gap-[5%] text-600 cursor-pointer"
                            onClick={toggleSubmenu}
                          >
                            <span className="font-medium">FAVORITES</span>
                            <i className="pi pi-chevron-down"></i>
                            <Ripple />
                          </div>
                        </StyleClass>
                        {submenuVisible && (
                          <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                              <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-home mr-2"></i>
                                <span className="font-medium">Dashboard</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-bookmark mr-2"></i>
                                <span className="font-medium">Bookmarks</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <StyleClass
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                              >
                                <div
                                  className="p-ripple p-3 flex items-center gap-[5%] text-600 cursor-pointer"
                                  onClick={toggleReportsSubmenu}
                                >
                                  <span className="font-medium">Reports</span>
                                  <i className="pi pi-chevron-down"></i>
                                  <Ripple />
                                </div>
                              </StyleClass>
                              {reportsSubmenuVisible && (
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                  <li>
                                    <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                      <i className="pi pi-chart-line mr-2"></i>
                                      <span className="font-medium">
                                        Revenue
                                      </span>
                                      <Ripple />
                                    </a>
                                  </li>
                                  {/* Outros itens de menu */}
                                </ul>
                              )}
                              <ul className="list-none py-0 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                <li>
                                  <StyleClass
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="slidedown"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="slideup"
                                  >
                                    <div
                                      className="p-ripple p-3 flex items-center gap-[5%] text-600 cursor-pointer"
                                      onClick={toggleRevenueSubmenu}
                                    >
                                      <span className="font-medium">
                                        Revenue
                                      </span>
                                      <i className="pi pi-chevron-down"></i>
                                      <Ripple />
                                    </div>
                                  </StyleClass>
                                  {revenueSubmenuVisible && (
                                    <ul className="list-none py-0 pl-3 pr-0 m-0  overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                      <li>
                                        <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                          <i className="pi pi-table mr-2"></i>
                                          <span className="font-medium">
                                            View
                                          </span>
                                          <Ripple />
                                        </a>
                                      </li>
                                      <li>
                                        <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                          <i className="pi pi-search mr-2"></i>
                                          <span className="font-medium">
                                            Search
                                          </span>
                                          <Ripple />
                                        </a>
                                      </li>
                                    </ul>
                                  )}
                                </li>
                                <li>
                                  <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2"></i>
                                    <span className="font-medium">
                                      Expenses
                                    </span>
                                    <Ripple />
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <ul className="list-none p-0 m-0 ">
                              <li>
                                <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                  <i className="pi pi-users mr-2"></i>
                                  <span className="font-medium">Team</span>
                                  <Ripple />
                                </a>
                              </li>
                              <li>
                                <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                  <i className="pi pi-comments mr-2"></i>
                                  <span className="font-medium">Messages</span>
                                  <span
                                    className="inline-flex items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
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
                                  <span className="font-medium">Calendar</span>
                                  <Ripple />
                                </a>
                              </li>
                              <li>
                                <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                  <i className="pi pi-cog mr-2"></i>
                                  <span className="font-medium">Settings</span>
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
                        <StyleClass
                          selector="@next"
                          enterClassName="hidden"
                          enterActiveClassName="slidedown"
                          leaveToClassName="hidden"
                          leaveActiveClassName="slideup"
                        >
                          <div
                            className="p-ripple p-3 flex items-center gap-[5%] text-600 cursor-pointer"
                            onClick={toggleaplicationSubmenu}
                          >
                            <span className="font-medium">Aplication</span>
                            <i className="pi pi-chevron-down"></i>
                            <Ripple />
                          </div>
                        </StyleClass>
                        {aplicationSubmenuVisible && (
                          <ul className="list-none p-0 m-0 overflow-hidden">
                            <li>
                              <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-folder mr-2"></i>
                                <span className="font-medium">Projects</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-bar mr-2"></i>
                                <span className="font-medium">Performance</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-cog mr-2"></i>
                                <span className="font-medium">Settings</span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
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
