import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCardBackground1 from "../../assets/imgs/features/cardBackground1.webp";
import imgCardBackground2 from "../../assets/imgs/features/cardBackground2.webp";
import imgCardBackground3 from "../../assets/imgs/features/cardBackground3.webp";
import imgCardBackground4 from "../../assets/imgs/features/cardBackground4.webp";

export default function Features() {
  return (
    <SectionArea className="bg-quinary desktop1:pb-[0px]">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com todos os tipos de imóveis"
        sectionHeaderSubtitle="Temos diversas opções imobiliárias que se encaixam perfeitamente no seu futuro"
      />
      <SectionWrapper>
        <div
          className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]"
          id="service"
        >
          <FeatureImgOnBgCard
            bgImg={imgCardBackground1}
            title="Cotação de Seguros"
            description="Melhores cotações para suas necessidades"
          />
          <FeatureImgOnBgCard
            bgImg={imgCardBackground2}
            title="Gestão de Apólices"
            description="Administração completa das suas apólices"
          />
          <FeatureImgOnBgCard
            bgImg={imgCardBackground3}
            title="Apoio em Sinistros"
            description="Assistência eficiente na resolução de sinistros"
          />
          <FeatureImgOnBgCard
            bgImg={imgCardBackground4}
            title="Análise de Risco"
            description="Avaliação detalhada dos riscos para proteção ideal"
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
