import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureCard from "../cards/FeatureCard";
import imgCard from "../../assets/imgs/paralaxe/bgDarkHouse.webp";

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
          <FeatureCard
            img={imgCard}
            title="Venda e Aluguel"
            description="Conte com nossa experiência para vender ou alugar seu imóvel com rapidez e segurança, garantindo a melhor oferta do mercado."
          />
          <FeatureCard
            img={imgCard}
            title="Avaliação"
            description="Realizamos avaliações precisas que captam o verdadeiro valor do seu imóvel, preparando-o para uma oferta ideal."
          />
          <FeatureCard
            img={imgCard}
            title="Negociação e Documentação"
            description="Facilitamos todo o processo de documentação e conduzimos negociações eficazes para assegurar uma transação tranquila e vantajosa."
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
