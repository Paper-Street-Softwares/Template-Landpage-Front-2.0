import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import imagem1 from "../../assets/imgs/logos/item1.png";
import imagem2 from "../../assets/imgs/logos/item2.png";
import imagem3 from "../../assets/imgs/logos/item3.png";
import imagem4 from "../../assets/imgs/logos/item4.png";
import imagem5 from "../../assets/imgs/logos/item5.png";
import imagem6 from "../../assets/imgs/logos/item6.png";
import imagem7 from "../../assets/imgs/logos/item7.png";
import imagem8 from "../../assets/imgs/logos/item8.png";
import imagem9 from "../../assets/imgs/logos/item9.png";
import imagem10 from "../../assets/imgs/logos/item10.jpg";
import LogoDisplay from "../sectionElements/LogoDisplay";

const images = [
  { src: imagem1, alt: "" },
  { src: imagem2, alt: "" },
  { src: imagem3, alt: "" },
  { src: imagem4, alt: "" },
  { src: imagem5, alt: "" },
  { src: imagem6, alt: "" },
  { src: imagem7, alt: "" },
  { src: imagem8, alt: "" },
  { src: imagem9, alt: "" },
  { src: imagem10, alt: "" },
  { src: imagem3, alt: "" },
  { src: imagem7, alt: "" },
];

export default function TrustedBy() {
  return (
    <SectionArea>
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com os principais empreendimentos"
        sectionHeaderSubtitle="Conectando você aos melhores e mais confiáveis empreendimentos do mercado"
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full">
          <LogoDisplay images={images} />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
