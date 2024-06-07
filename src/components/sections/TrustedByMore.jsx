import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import LogoDisplay from "../sectionElements/LogoDisplay";
import content from "../../abstractions/content";

const images = [
  {
    src: content.texts.trustedBy.images.img1.img.trustedByImg1,
    alt: content.texts.trustedBy.images.img1.alt,
  },
  {
    src: content.texts.trustedBy.images.img2.img.trustedByImg2,
    alt: content.texts.trustedBy.images.img2.alt,
  },
  {
    src: content.texts.trustedBy.images.img3.img.trustedByImg3,
    alt: content.texts.trustedBy.images.img3.alt,
  },
  {
    src: content.texts.trustedBy.images.img4.img.trustedByImg4,
    alt: content.texts.trustedBy.images.img4.alt,
  },
  {
    src: content.texts.trustedBy.images.img5.img.trustedByImg5,
    alt: content.texts.trustedBy.images.img5.alt,
  },
  {
    src: content.texts.trustedBy.images.img6.img.trustedByImg6,
    alt: content.texts.trustedBy.images.img6.alt,
  },
  {
    src: content.texts.trustedBy.images.img7.img.trustedByImg6,
    alt: content.texts.trustedBy.images.img7.alt,
  },
];

export default function TrustedByMore() {
  return (
    <SectionArea className="bg-quinary py-[20px] tablet1:py-[32px] desktop1:py-[46px]">
      <SectionHeader
        className="text-center"
        sectionHeaderSubtitle={content.texts.trustedBy.trustedMore.subtitle}
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
          <LogoDisplay images={images} />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
