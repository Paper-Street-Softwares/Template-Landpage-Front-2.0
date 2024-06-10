import React, { useState } from "react";
import ButtonWithIcon from "../interactives/ButtonWithIcon";
import { Dialog } from "primereact/dialog";
import TabComponent from "../sectionElements/TabComponent";
import PropTypes from "prop-types";
// import CardModal from "../sectionElements/CardModal";
import ModalComponent from "../interactives/ModalComponent";
import imgCard19 from "../../assets/imgs/cardModal/imgCardModal19.png";
import imgCard20 from "../../assets/imgs/cardModal/imgCardModal20.png";
import imgCard25 from "../../assets/imgs/cardModal/imgCardModal25.png";
import imgCard26 from "../../assets/imgs/cardModal/imgCardModal26.png";
import services from "../../content/services";
import ServiceDetailCard from "../cards/ServiceDetailCard";

const ServicesModal = () => {
  const [visible, setVisible] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const tabs = [
    {
      label: "Pessoal",
      content: (
        <div className="flex justify-center py-[5%]">
          <div className="flex w-full px-[5%] h-auto flex-col gap-[18px]">
            <div className="text-[12px] font-secondFont">
              <p>Clique no seguro para saber mais informações:</p>
            </div>
            {/* link1 */}
            <div className="text-[12px] flex flex-col gap-[8px] text-blue-700 font-secondFont">
              <ModalComponent
                header={services.moreServices.pessoal.service1.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service1.img.img}
                    subtitle={
                      services.moreServices.pessoal.service1.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service1.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service1.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link2 */}
              <ModalComponent
                header={services.moreServices.pessoal.service2.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service2.img.img}
                    subtitle={
                      services.moreServices.pessoal.service2.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service2.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service2.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service2.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link3 */}
              <ModalComponent
                header={services.moreServices.pessoal.service3.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service3.img.img}
                    subtitle={
                      services.moreServices.pessoal.service3.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service3.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service3.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service3.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 4 */}
              <ModalComponent
                header={services.moreServices.pessoal.service4.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service4.img.img}
                    subtitle={
                      services.moreServices.pessoal.service4.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service4.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service4.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service4.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 5 */}
              <ModalComponent
                header={services.moreServices.pessoal.service5.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service5.img.img}
                    subtitle={
                      services.moreServices.pessoal.service5.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service5.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service5.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service5.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 6 */}
              <ModalComponent
                header={services.moreServices.pessoal.service6.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service6.img.img}
                    subtitle={
                      services.moreServices.pessoal.service6.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service6.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service6.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service6.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 7 */}
              <ModalComponent
                header={services.moreServices.pessoal.service7.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service7.img.img}
                    subtitle={
                      services.moreServices.pessoal.service7.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service7.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service7.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service7.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 8 */}
              <ModalComponent
                header={services.moreServices.pessoal.service8.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service8.img.img}
                    subtitle={
                      services.moreServices.pessoal.service8.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service8.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service8.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service8.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 9 */}
              <ModalComponent
                header={services.moreServices.pessoal.service9.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service9.img.img}
                    subtitle={
                      services.moreServices.pessoal.service9.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service9.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service9.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service9.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 10 */}
              <ModalComponent
                header={services.moreServices.pessoal.service10.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service10.img.img}
                    subtitle={
                      services.moreServices.pessoal.service10.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service10.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service10.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service10.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 11 */}
              <ModalComponent
                header={services.moreServices.pessoal.service11.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service11.img.img}
                    subtitle={
                      services.moreServices.pessoal.service11.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service11.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service11.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service11.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 12 */}
              <ModalComponent
                header={services.moreServices.pessoal.service12.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service12.img.img}
                    subtitle={
                      services.moreServices.pessoal.service12.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service12.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service12.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service12.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 13 */}
              <ModalComponent
                header={services.moreServices.pessoal.service13.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service13.img.img}
                    subtitle={
                      services.moreServices.pessoal.service13.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service13.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service13.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service13.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 14 */}
              <ModalComponent
                header={services.moreServices.pessoal.service14.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service14.img.img}
                    subtitle={
                      services.moreServices.pessoal.service14.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service14.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service14.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service14.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 15 */}
              <ModalComponent
                header={services.moreServices.pessoal.service15.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service15.img.img}
                    subtitle={
                      services.moreServices.pessoal.service15.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service15.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service15.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service15.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 16 */}
              <ModalComponent
                header={services.moreServices.pessoal.service16.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service16.img.img}
                    subtitle={
                      services.moreServices.pessoal.service16.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service16.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service16.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service16.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 17 */}
              <ModalComponent
                header={services.moreServices.pessoal.service17.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service17.img.img}
                    subtitle={
                      services.moreServices.pessoal.service17.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service17.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service17.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service17.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 18 */}
              <ModalComponent
                header={services.moreServices.pessoal.service18.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service18.img.img}
                    subtitle={
                      services.moreServices.pessoal.service18.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service18.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service18.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service18.name}
                  </span>
                </button>
              </ModalComponent>
              {/* link 19 */}
              <ModalComponent
                header={services.moreServices.pessoal.service19.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.pessoal.service19.img.img}
                    subtitle={
                      services.moreServices.pessoal.service19.cardSubtitle
                    }
                    description={
                      services.moreServices.pessoal.service19.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.pessoal.service19.buttonLink
                    }
                  />
                }
              >
                <button className="flex">
                  {services.moreServices.arrowIcon}
                  <span className="ml-1">
                    {services.moreServices.pessoal.service19.name}
                  </span>
                </button>
              </ModalComponent>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Empresarial",
      content: (
        <div className="flex justify-center py-[5%]">
          <div className="flex w-full px-[5%] h-auto flex-col gap-[18px]">
            <div className="text-[12px] font-secondFont">
              <p>Clique no seguro para saber mais informações:</p>
            </div>
            <div className="text-[12px] flex flex-col gap-[8px] text-blue-700 font-secondFont">
              {/* link1 */}
              <ModalComponent
                header="Seguro Auto Empresarial"
                content={
                  <div className="w-full flex flex-col gap-[16px]">
                    <div className="flex w-full">
                      <img className="w-[100%]" src={imgCard19} alt="" />
                    </div>
                    <div className="flex flex-col gap-[32px]">
                      <div className="flex flex-col gap-[12px]">
                        <h2 className="flex font-bold">
                          Pra quem é esse seguro?
                        </h2>
                        <p className="flex">
                          Para empresas que desejam proteger sua frota de
                          veículos, garantindo segurança e tranquilidade nas
                          operações.
                        </p>
                      </div>
                      <div className="">
                        <ButtonWithIcon
                          label="Simular Agora"
                          icon={
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 1024 1024"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                            >
                              <path d="M893.8 130.2c-58.8-58.8-154.5-58.8-213.3 0l-453 453c-4.3 4.3-7.4 9.6-9.1 15.4L136.5 873.2c-5.3 17.9-0.8 37.5 12.1 50.4 12.9 12.9 32.5 17.4 50.4 12.1l274.5-81.8c5.8-1.7 11.1-4.8 15.4-9.1l453-453c58.8-58.8 58.8-154.5 0-213.3zM378 791.4l-169.4 50.5 50.5-169.4 378.3-378.3 118.8 118.8L378 791.4zM803.1 366.3L684.3 247.5l75.1-75.1c19.5-19.5 51.1-19.5 70.6 0l48.2 48.2c19.5 19.5 19.5 51.1 0 70.6L803.1 366.3z" />
                              <path d="M165.3 877.9l-.6.4-28 8.3 8.3-28.1.4-.6zM1024 960v64H0v-64z" />
                            </svg>
                          }
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <button className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-corner-down-right"
                  >
                    <polyline points="15 10 20 15 15 20" />
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                  </svg>
                  <span className="ml-1">Seguro Auto Empresarial</span>
                </button>
              </ModalComponent>
              {/* link2 */}
              <ModalComponent
                header="Seguro de Vida Empresarial"
                content={
                  <div className="w-full flex flex-col gap-[16px]">
                    <div className="flex w-full">
                      <img className="w-[100%]" src={imgCard20} alt="" />
                    </div>
                    <div className="flex flex-col gap-[32px]">
                      <div className="flex flex-col gap-[12px]">
                        <h2 className="flex font-bold">
                          Pra quem é esse seguro?
                        </h2>
                        <p className="flex">
                          Para empresários que desejam proteger seus sócios e
                          funcionários, tecendo uma rede de segurança
                          corporativa.
                        </p>
                      </div>
                      <div className="">
                        <ButtonWithIcon
                          label="Simular Agora"
                          icon={
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 1024 1024"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                            >
                              <path d="M893.8 130.2c-58.8-58.8-154.5-58.8-213.3 0l-453 453c-4.3 4.3-7.4 9.6-9.1 15.4L136.5 873.2c-5.3 17.9-0.8 37.5 12.1 50.4 12.9 12.9 32.5 17.4 50.4 12.1l274.5-81.8c5.8-1.7 11.1-4.8 15.4-9.1l453-453c58.8-58.8 58.8-154.5 0-213.3zM378 791.4l-169.4 50.5 50.5-169.4 378.3-378.3 118.8 118.8L378 791.4zM803.1 366.3L684.3 247.5l75.1-75.1c19.5-19.5 51.1-19.5 70.6 0l48.2 48.2c19.5 19.5 19.5 51.1 0 70.6L803.1 366.3z" />
                              <path d="M165.3 877.9l-.6.4-28 8.3 8.3-28.1.4-.6zM1024 960v64H0v-64z" />
                            </svg>
                          }
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <button className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-corner-down-right"
                  >
                    <polyline points="15 10 20 15 15 20" />
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                  </svg>
                  <span className="ml-1">Seguro de Vida Empresarial</span>
                </button>
              </ModalComponent>
              {/* link3 */}
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Patrimonial",
      content: (
        <div className="flex justify-center py-[5%]">
          <div className="flex w-full px-[5%] h-auto flex-col gap-[18px]">
            <div className="text-[12px] font-secondFont">
              <p>Clique no seguro para saber mais:</p>
            </div>
            <div className="text-[12px] flex flex-col gap-[8px] text-blue-700 font-secondFont">
              {/* link1 */}
              <ModalComponent
                header="Seguro Residência"
                content={
                  <div className="w-full flex flex-col gap-[16px]">
                    <div className="flex w-full">
                      <img className="w-[100%]" src={imgCard25} alt="" />
                    </div>
                    <div className="flex flex-col gap-[32px]">
                      <div className="flex flex-col gap-[12px]">
                        <h2 className="flex font-bold">
                          Pra quem é esse seguro?
                        </h2>
                        <p className="flex">
                          Para famílias que desejam proteger seu lar contra
                          imprevistos, garantindo segurança e tranquilidade no
                          mosaico de suas vidas
                        </p>
                      </div>
                      <div className="">
                        <ButtonWithIcon
                          label="Simular Agora"
                          icon={
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 1024 1024"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                            >
                              <path d="M893.8 130.2c-58.8-58.8-154.5-58.8-213.3 0l-453 453c-4.3 4.3-7.4 9.6-9.1 15.4L136.5 873.2c-5.3 17.9-0.8 37.5 12.1 50.4 12.9 12.9 32.5 17.4 50.4 12.1l274.5-81.8c5.8-1.7 11.1-4.8 15.4-9.1l453-453c58.8-58.8 58.8-154.5 0-213.3zM378 791.4l-169.4 50.5 50.5-169.4 378.3-378.3 118.8 118.8L378 791.4zM803.1 366.3L684.3 247.5l75.1-75.1c19.5-19.5 51.1-19.5 70.6 0l48.2 48.2c19.5 19.5 19.5 51.1 0 70.6L803.1 366.3z" />
                              <path d="M165.3 877.9l-.6.4-28 8.3 8.3-28.1.4-.6zM1024 960v64H0v-64z" />
                            </svg>
                          }
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <button className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-corner-down-right"
                  >
                    <polyline points="15 10 20 15 15 20" />
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                  </svg>
                  <span className="ml-1">Seguro Residência</span>
                </button>
              </ModalComponent>
              {/* link2 */}
              <ModalComponent
                header="Seguro Moto"
                content={
                  <div className="w-full flex flex-col gap-[16px]">
                    <div className="flex w-full">
                      <img className="w-[100%]" src={imgCard26} alt="" />
                    </div>
                    <div className="flex flex-col gap-[32px]">
                      <div className="flex flex-col gap-[12px]">
                        <h2 className="flex font-bold">
                          Pra quem é esse seguro?
                        </h2>
                        <p className="flex">
                          Para motociclistas que querem proteger sua paixão
                          sobre duas rodas, navegando o labirinto urbano com
                          tranquilidade.
                        </p>
                      </div>
                      <div className="">
                        <ButtonWithIcon
                          label="Simular Agora"
                          icon={
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 1024 1024"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                            >
                              <path d="M893.8 130.2c-58.8-58.8-154.5-58.8-213.3 0l-453 453c-4.3 4.3-7.4 9.6-9.1 15.4L136.5 873.2c-5.3 17.9-0.8 37.5 12.1 50.4 12.9 12.9 32.5 17.4 50.4 12.1l274.5-81.8c5.8-1.7 11.1-4.8 15.4-9.1l453-453c58.8-58.8 58.8-154.5 0-213.3zM378 791.4l-169.4 50.5 50.5-169.4 378.3-378.3 118.8 118.8L378 791.4zM803.1 366.3L684.3 247.5l75.1-75.1c19.5-19.5 51.1-19.5 70.6 0l48.2 48.2c19.5 19.5 19.5 51.1 0 70.6L803.1 366.3z" />
                              <path d="M165.3 877.9l-.6.4-28 8.3 8.3-28.1.4-.6zM1024 960v64H0v-64z" />
                            </svg>
                          }
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <button className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-corner-down-right"
                  >
                    <polyline points="15 10 20 15 15 20" />
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                  </svg>
                  <span className="ml-1">Seguro Moto</span>
                </button>
              </ModalComponent>
              {/* link3 */}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <ButtonWithIcon
        label="Ver todos"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        }
        onClick={() => setVisible(true)}
        className="text-white bg-black px-[2%] py-[0.8%]"
      />

      <Dialog
        header="Demais Seguros"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "384px", "426px": "90vw" }}
        contentStyle={{ padding: "1rem", paddingLeft: "", paddingRight: "" }}
      >
        <div className="flex flex-col w-full gap-[12px]">
          <div>
            <p className="text-[12px] font-secondFont">
              Selecione o tipo de seguro para conhecer as opções disponíveis:
            </p>
          </div>
          <div className="flex justify-center w-full">
            <TabComponent tabs={tabs} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

ServicesModal.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default ServicesModal;
