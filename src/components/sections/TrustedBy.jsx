import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import imagem1 from "../../assets/imgs/trustedBy/item1.png";
import imagem2 from "../../assets/imgs/trustedBy/item2.png";
import imagem3 from "../../assets/imgs/trustedBy/item3.png";
import imagem4 from "../../assets/imgs/trustedBy/item4.png";
import imagem5 from "../../assets/imgs/trustedBy/item5.png";
import imagem6 from "../../assets/imgs/trustedBy/item6.png";
import LogoDisplay from "../sectionElements/LogoDisplay";

const images = [
  { src: imagem1, alt: "" },
  { src: imagem2, alt: "" },
  { src: imagem3, alt: "" },
  { src: imagem4, alt: "" },
  { src: imagem5, alt: "" },
  { src: imagem6, alt: "" },
];

export default function TrustedBy() {
  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Parceria com as maiores seguradoras"
        sectionHeaderSubtitle="Confiabilidade e excelência em proteção"
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full">
          <LogoDisplay images={images} />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
