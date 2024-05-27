import React, { useState } from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureCard from "../cards/FeatureCard";
import imgCard1 from "../../assets/imgs/features/card1.webp";
import imgCard2 from "../../assets/imgs/features/card2.webp";
import imgCard3 from "../../assets/imgs/features/card3.webp";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Featuresv2() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleButtonClick = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setVisible(true);
  };

  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Nossos Seguros"
        sectionHeaderSubtitle="Descubra nossas especialidades em proteção e assistência"
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px] desktop1:flex-row">
          <FeatureCard
            img={imgCard1}
            title="Seguro Automóvel"
            description="Proteção completa para seu veículo, com assistência 24 horas e serviços personalizados."
          />
          <FeatureCard
            img={imgCard2}
            title="Seguro Residencial"
            description="Coberturas abrangentes para sua casa ou apartamento, incluindo danos estruturais e responsabilidade civil."
          />
          <FeatureCard
            img={imgCard3}
            title="Seguro de Vida"
            description="Segurança financeira para sua família em casos de imprevistos, com coberturas adaptadas às suas necessidades."
          />
        </div>
      </SectionWrapper>
      <Dialog
        className=" font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
