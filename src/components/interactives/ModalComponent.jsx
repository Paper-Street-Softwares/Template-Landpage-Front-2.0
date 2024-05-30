import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ButtonWithIcon from "./ButtonWithIcon";

export default function ModalComponent({ buttonLabel, dialogHeader, dialogContent }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-center">
      <ButtonWithIcon
        label={buttonLabel}
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
            className="lucide lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        }
        onClick={() => setVisible(true)}
        className="text-white bg-black px-[2%] py-[0.8%]"
      />
      <Dialog
        header={dialogHeader}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        {React.isValidElement(dialogContent) ? dialogContent : (
          dialogContent.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: "1rem" }}>
              {paragraph}
            </p>
          ))
        )}
      </Dialog>
    </div>
  );
}
