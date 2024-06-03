import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function CardModal({ visible, onClose, header, content }) {
  return (
    <div className="">
      <div className=" flex justify-center">
        <Dialog
          className=" font-secondFont"
          header={header}
          visible={visible}
          onHide={onClose}
          style={{ width: "50vw" }}
          breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        >
          {content}
        </Dialog>
      </div>
    </div>
  );
}
