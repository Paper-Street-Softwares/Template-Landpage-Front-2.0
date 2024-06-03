import React, { useState } from "react";
import ButtonWithIcon from "../interactives/ButtonWithIcon";
import { Dialog } from "primereact/dialog";
import TabComponent from "../sectionElements/TabComponent";
import Faq from "./Faq";
import PropTypes from "prop-types";

const ServicesModal = () => {
  const [visible, setVisible] = useState(false);

  const tabs = [
    {
      label: "Pessoal",
      content: (
        <div className="bg-red-500  h-auto ">
          <Faq />
        </div>
      ),
    },
    {
      label: "Empresarial",
      content: (
        <div className="flex justify-center py-[5%] ">
          <div className="flex w-[210px] h-auto flex-col gap-[18px]  ">
            <div className="text-[12px] font-secondFont">
              <p>Clique no seguro para saber mais informações:</p>
            </div>
            <div className="text-[12px] flex flex-col gap-[8px] text-blue-700 font-secondFont">
              {/* <button className="flex">
                <ion-icon
                  style={{ fontSize: "18px" }}
                  name="return-down-forward-outline"
                ></ion-icon>
                <span className="ml-1">Seguro Objetos Pessoais</span>
              </button>
              <button className="flex">
                <ion-icon
                  style={{ fontSize: "18px" }}
                  name="return-down-forward-outline"
                ></ion-icon>
                <span className="ml-1 text-left">
                  Seguro Objetos Pessoais e de <br /> objeto
                </span>
              </button>
              <button className="flex">
                <ion-icon
                  style={{ fontSize: "18px" }}
                  name="return-down-forward-outline"
                ></ion-icon>
                <span className="ml-1">Seguro Objetos Pessoais</span>
              </button>
              <button className="flex">
                <ion-icon
                  style={{ fontSize: "18px" }}
                  name="return-down-forward-outline"
                ></ion-icon>
                <span className="ml-1">Seguro Objetos Pessoais</span>
              </button> */}
              
              <button className="flex">
                <ion-icon
                  style={{ fontSize: "18px" }}
                  name="return-down-forward-outline"
                ></ion-icon>
                <span className="ml-1">Seguro Objetos Pessoais</span>
              </button>
              <button className="flex">
                <ion-icon
                  style={{ fontSize: "18px" }}
                  name="return-down-forward-outline"
                ></ion-icon>
                <span className="ml-1">Seguro Objetos Pessoais</span>
              </button>
              <button className="flex">
                <ion-icon
                  style={{ fontSize: "18px" }}
                  name="return-down-forward-outline"
                ></ion-icon>
                <span className="ml-1">Seguro Objetos Pessoais</span>
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Patrimonial",
      content: <div className="bg-red-500 h-auto"></div>,
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-plus"
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
        header="Nossos Seguros"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <div className="flex flex-col gap-[12px]">
          <div>
            <p className="text-[12px] font-secondFont">
              Selecione o tipo de seguro para conhecer as opções disponíveis:
            </p>
          </div>
          <div>
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
