import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function Featuresv1() {
  return (
    <SectionArea className="bg-quinary desktop1:pb-[0px]">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com todos os tipos de imóveis"
        sectionHeaderSubtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at"
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]"></div>
      </SectionWrapper>
    </SectionArea>
  );
}
