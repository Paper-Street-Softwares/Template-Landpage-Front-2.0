import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import FeatureBgImgCard from "../cards/featureBgImgCard";

export default function Featuresv1() {
  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com todos os tipos de imóveis"
        sectionHeaderSubtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at."
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[20px] tablet1:gap-[24px]">
          <FeatureBgImgCard />
          <img
            src=""
            alt=""
            className="bg-gray-300 w-[45%] min-h-[30px] max-h-[50px] tablet1:w-[30%] desktop1:w-[13%]"
          />
          <img
            src=""
            alt=""
            className="bg-gray-300 w-[45%] min-h-[30px] max-h-[50px] tablet1:w-[30%] desktop1:w-[13%]"
          />
          <img
            src=""
            alt=""
            className="bg-gray-300 w-[45%] min-h-[30px] max-h-[50px] tablet1:w-[30%] desktop1:w-[13%]"
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
