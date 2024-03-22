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
      <div className="content py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Linha de Produtos"
          sectionHeaderDescription="Ao longo dos anos, fomos firmando parcerias hoje bastante consolidadas com marcas renomadas e de grande credibilidade no mercado. Encontre a marca que você deseja comprar e clique na categoria para ser levado para a página contendo os produtos desta marca."
        />
        <SectionContent>
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Consultar produtos"
            button1Link="#"
          />
          <ImgAndButtonsCard
            img={gencoLogo}
            button1Label="Consultar produtos"
            button1Link="#"
          />
          <ImgAndButtonsCard
            img={neoclorLogo}
            button1Label="Consultar produtos"
            button1Link="#"
          />
          <ImgAndButtonsCard
            img={hidroazulLogo}
            button1Label="Consultar produtos"
            button1Link="#"
          />
          <ImgAndButtonsCard
            img={domclorLogo}
            button1Label="Consultar produtos"
            button1Link="#"
          />
          <ImgAndButtonsCard
            img={suallLogo}
            button1Label="Consultar produtos"
            button1Link="#"
          />
          <ImgAndButtonsCard
            img={sodramarLogo}
            button1Label="Consultar produtos"
            button1Link="#"
          />
          <ImgAndButtonsCard
            img={netunoLogo}
            button1Label="Consultar produtos"
            button1Link="#"
          />
        </SectionContent>
      </div>
    </div>
  );
}
