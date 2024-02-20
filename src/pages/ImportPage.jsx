import SectionHeader from "../components/sectionElements/SectionHeader";
import SectionContent from "../components/sectionElements/SectionContent";
import ServiceCard from "../components/cards/ServiceCard";
import icon from "../assets/importAssets/expertise.png";
import bgImg from "../assets/importAssets/bg.jpg";
import BlankParallaxe from "../components/sectionElements/BlankParallaxe";
import Acordion from "../components/interactives/Acordion";
import MarginBetweenSection from "../components/sectionElements/MarginBetweenSection";

export default function ImportPage() {
  return (
    <div className="content">
      <MarginBetweenSection />
      <SectionHeader
        sectionHeaderTitleFirst="Todas as certidões que"
        sectionHeaderTitleSecond="sua empresa precisa"
        sectionHeaderDescription="A Edan Contabilidade simplifica seu dia a dia com links diretos para as principais certidões."
      />
      <SectionContent>
        <ServiceCard icon={icon} title="Título" description="Description" />
        <ServiceCard icon={icon} title="Título" description="Description" />
        <ServiceCard icon={icon} title="Título" description="Description" />
        <ServiceCard icon={icon} title="Título" description="Description" />
        <ServiceCard icon={icon} title="Título" description="Description" />
      </SectionContent>
      <MarginBetweenSection />
      <div className="w-[100%] tablet1:w-[50%]">
        <Acordion />
      </div>
      <MarginBetweenSection />
      <BlankParallaxe bgImg={bgImg} />
    </div>
  );
}
