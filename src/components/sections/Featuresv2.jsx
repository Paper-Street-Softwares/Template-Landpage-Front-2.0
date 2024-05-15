import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureCard from "../cards/FeatureCard";

export default function Featuresv2() {
  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com todos os tipos de imóveis"
        sectionHeaderSubtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at."
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px] desktop1:flex-row">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
