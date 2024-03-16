import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import ImgCodeDescButtonCard from "../cards/imgCodeDescButtonCard";
// import ImgAndButtonsCard from "../cards/ImgAndButtonsCard";
// import hthLogo from "../../assets/imgs/brands/hthLogo.png";
// import gencoLogo from "../../assets/imgs/brands/gencoLogo.png";
// import domclorLogo from "../../assets/imgs/brands/domclorLogo.png";
// import hidroazulLogo from "../../assets/imgs/brands/hidroazulLogo.png";
// import neoclorLogo from "../../assets/imgs/brands/neoclorLogo.png";
// import netunoLogo from "../../assets/imgs/brands/netunoLogo.png";
// import sodramarLogo from "../../assets/imgs/brands/sodramarLogo.png";
// import suallLogo from "../../assets/imgs/brands/suallLogo.png";

export default function OurProducts() {
  return (
    <div className="full">
      <div className="bg-quinary content py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Linha de Produtos"
          sectionHeaderDescription="Ao longo dos anos, fomos firmando parcerias hoje bastante consolidadas com marcas renomadas e de grande credibilidade no mercado. Encontre a marca que você deseja comprar e clique na categoria para ser levado para a página contendo os produtos desta marca."
        />
        <SectionContent>
          <ImgCodeDescButtonCard />
          {/* 
          <ImgAndButtonsCard
            img={hthLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={gencoLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={neoclorLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={hidroazulLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={domclorLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={suallLogo}
            button1Label="Cloros"
            button1Link="#"
            button2Label="Auxiliares"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={sodramarLogo}
            button1Label="Limpeza"
            button1Link="#"
            button2Label="Construção"
            button2Link="#"
          />
          <ImgAndButtonsCard
            img={netunoLogo}
            button1Label="Limpeza"
            button1Link="#"
            button2Label="Construção"
            button2Link="#"
          />
          */}
        </SectionContent>
      </div>
    </div>
  );
}
