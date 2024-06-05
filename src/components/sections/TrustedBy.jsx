import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import imagem1 from "../../assets/imgs/trustedBy/item1.webp";
import imagem2 from "../../assets/imgs/trustedBy/item2.webp";
import imagem3 from "../../assets/imgs/trustedBy/item3.webp";
import imagem4 from "../../assets/imgs/trustedBy/item4.webp";
import imagem5 from "../../assets/imgs/trustedBy/item5.webp";
import imagem6 from "../../assets/imgs/trustedBy/item6.webp";
import LogoDisplay from "../sectionElements/LogoDisplay";
import content from "../../abstractions/content";

const images = [
  {
    src: content.texts.trustedBy.images.img1.trustedByImg1,
    alt: content.texts.trustedBy.images.img1Alt,
  },
  {
    src: content.texts.trustedBy.images.img2.trustedByImg2,
    alt: content.texts.trustedBy.images.img2Alt,
  },
  {
    src: content.texts.trustedBy.images.img3.trustedByImg3,
    alt: content.texts.trustedBy.images.img3Alt,
  },
  {
    src: content.texts.trustedBy.images.img4.trustedByImg4,
    alt: content.texts.trustedBy.images.img4Alt,
  },
  {
    src: content.texts.trustedBy.images.img5.trustedByImg5,
    alt: content.texts.trustedBy.images.img5Alt,
  },
  {
    src: content.texts.trustedBy.images.img6.trustedByImg6,
    alt: content.texts.trustedBy.images.img6Alt,
  },
];

export default function TrustedBy() {
  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.trustedBy.title}
        sectionHeaderSubtitle={content.texts.trustedBy.subtitle}
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full">
          <LogoDisplay images={images} />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
