import React from "react";
import TabComponent from "../sectionElements/TabComponent";
import ModalComponent from "../interactives/ModalComponent";

const MyPage = () => {
  const tabs = [
    {
      label: "Home",
      content: {
        paragraph: "Primeiro texto de teste.",
      },
    },
    {
      label: "Profile",
      content: {
        paragraph: "Segundo texto de teste.",
      },
    },
    {
      label: "Contact",
      content: {
        paragraph: "Terceiro texto de teste.",
      },
    },
  ];
  const title = "Meu Título Personalizado";
  const content = <TabComponent tabs={tabs} />;

  return (
    <div>
      <ModalComponent
        buttonLabel="Abrir"
        dialogHeader={title}
        dialogContent={content}
      />
    </div>
  );
};

export default MyPage;
