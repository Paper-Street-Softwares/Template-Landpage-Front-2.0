import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import ImgAndButtonsCard from "../cards/ImgAndButtonsCard";
import hthLogo from "../../assets/imgs/brands/hthLogo.png";
import gencoLogo from "../../assets/imgs/brands/gencoLogo.png";
import domclorLogo from "../../assets/imgs/brands/domclorLogo.png";
import hidroazulLogo from "../../assets/imgs/brands/hidroazulLogo.png";
import neoclorLogo from "../../assets/imgs/brands/neoclorLogo.png";
import netunoLogo from "../../assets/imgs/brands/netunoLogo.png";
import sodramarLogo from "../../assets/imgs/brands/sodramarLogo.png";
import suallLogo from "../../assets/imgs/brands/suallLogo.png";

export default function OurProducts() {
  return (
    <div className="full bg-quinary" id="products">
      <div className="w-[88%] max-w-[1110px] py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Linha de Produtos"
          sectionHeaderDescription="Aqui você encontra as melhores marcas. Escolha aquela da sua confiança e boas compras!"
        />
        <SectionContent>
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Consultar produtos"
            button1Link="/hth"
          />
          <ImgAndButtonsCard
            img={gencoLogo}
            button1Label="Consultar produtos"
            button1Link="/genco"
          />
          <ImgAndButtonsCard
            img={neoclorLogo}
            button1Label="Consultar produtos"
            button1Link="/neoclor"
          />
          <ImgAndButtonsCard
            img={hidroazulLogo}
            button1Label="Consultar produtos"
            button1Link="/hidroazul"
          />
          <ImgAndButtonsCard
            img={domclorLogo}
            button1Label="Consultar produtos"
            button1Link="/domclor"
          />
          <ImgAndButtonsCard
            img={suallLogo}
            button1Label="Consultar produtos"
            button1Link="/suall"
          />
          <ImgAndButtonsCard
            img={sodramarLogo}
            button1Label="Consultar acessórios"
            button1Link="/sodramar"
          />
          <ImgAndButtonsCard
            img={netunoLogo}
            button1Label="Consultar acessórios"
            button1Link="/netuno"
          />
        </SectionContent>
      </div>
    </div>
  );
}
