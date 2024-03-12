import SectionHeader from "../components/sectionElements/SectionHeader";
import SectionContent from "../components/sectionElements/SectionContent";
import ServiceCard from "../components/cards/ServiceCard";
import icon from "../assets/importAssets/expertise.png";
import bgImg from "../assets/importAssets/bg.jpg";
import faqImg from "../assets/importAssets/faq.png";
import BlankParallaxe from "../components/sectionElements/BlankParallaxe";
import Acordion from "../components/interactives/Acordion";
import MarginBetweenSection from "../components/sectionElements/MarginBetweenSection";
import ImagesGallery from "../components/interactives/ImagesGallery";
import AboutUs from "../components/sections/AboutUs";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import MotionDivRightToLeft from "../components/animation/MotionDivRightToLeft";

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
      </SectionContent>

      <MarginBetweenSection />
      <ImagesGallery />
      <MarginBetweenSection />
      <BlankParallaxe bgImg={bgImg} />
      <MarginBetweenSection />
      <AboutUs />
      <MarginBetweenSection />
      <SectionHeader
        sectionHeaderTitleSecond="Perguntas Frequentes"
        sectionHeaderDescription="Ficou com alguma dúvida? Clique na pergunta abaixo e obtenha a resposta. 
        Caso não tenha encontrado a resposta que precisa, entre em contato conosco e iremos te esclarecer."
      />
      <div className="flex justify-between ">
        <div className="w-full desktop1:w-[60%] desktop2:w-[63%]">
          <Acordion />
        </div>
        <div className="hidden desktop1:block">
          <MotionDivRightToLeft>
            <img src={faqImg} alt="Faq Img"></img>
          </MotionDivRightToLeft>
        </div>
      </div>
      <BackToTopButton />
      <FloatingWhatsappButton />
      <MarginBetweenSection />
    </div>
  );
}
