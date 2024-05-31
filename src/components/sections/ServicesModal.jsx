import React, { useState } from "react";
import ButtonWithIcon from "../interactives/ButtonWithIcon";
import { Dialog } from "primereact/dialog";
import TabComponent from "../sectionElements/TabComponent";
import Faq from "./Faq";

const ServicesModal = () => {
  const [visible, setVisible] = useState(false);

  const tabs = [
    {
      label: "Tab 1",
      content: (
        <div className="bg-red-500 h-60">
          <Faq />
        </div>
      ),
    },
    {
      label: "Tab 2",
      content: <div className="bg-green-500 h-60"></div>,
    },
    {
      label: "Tab 3",
      content: <div className="bg-red-500 h-60"></div>,
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
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <p className="pt-[6%]">Selecione o tipo:</p>
        <TabComponent tabs={tabs} />
      </Dialog>
    </div>
  );
};

export default ServicesModal;
