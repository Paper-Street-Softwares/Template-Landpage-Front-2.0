import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import hthLogo from "../../assets/imgs/brands/hthLogo.png";
import gencoLogo from "../../assets/imgs/brands/gencoLogo.png";
import hidroazulLogo from "../../assets/imgs/brands/hidroazulLogo.png";
import ImgTextAndButtonsCard from "../cards/ImgTextAndButtonsCard";

export default function Courses() {
  return (
    <div className="full bg-quinary" id="courses">
      <div className="content py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Aprimore seu conhecimento"
          sectionHeaderDescription="Confira abaixo nossas sugestões para palestras ou cursos para tratamento da sua piscina. Escolha o que mais lhe interessar, e boas aulas!"
        />
        <SectionContent>
          <ImgTextAndButtonsCard
            img={hthLogo}
            text="Curso presencial de tratamento de águas de piscinas."
            button1Label="Visitar site"
            button1Link="https://hth.com.br/cursos-presenciais
            "
          />
          <ImgTextAndButtonsCard
            img={gencoLogo}
            text="Curso online na Escola da Piscina."
            button1Label="Visitar site"
            button1Link="https://www.genco.com.br/escola-da-piscina/"
          />
          <ImgTextAndButtonsCard
            img={hidroazulLogo}
            text="Curso completo na Universidade da Piscina."
            button1Label="Visitar site"
            button1Link="https://hidroazul.com.br/universidade-da-piscina/"
          />
        </SectionContent>
      </div>
    </div>
  );
}
