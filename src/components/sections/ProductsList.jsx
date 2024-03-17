import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import imgProductExample from "../../assets/imgs/products/hth/cloros/baldeCloro.png";

export default function ProductsList() {
  return (
    <div className="full">
      <div className="bg-quinary content py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Linha de Produtos"
          sectionHeaderDescription="Ao longo dos anos, fomos firmando parcerias hoje bastante consolidadas com marcas renomadas e de grande credibilidade no mercado. Encontre a marca que você deseja comprar e clique na categoria para ser levado para a página contendo os produtos desta marca."
        />
        <SectionContent>
          <ImgCodeDescButtonCard
            img={imgProductExample}
            code="102030"
            description="Descrição do produto descrição do produto descrição do produto descrição."
            button1Label="Baixar Ficha FISPQ"
            button1Link="#"
            category="cloros"
          />
        </SectionContent>
      </div>
    </div>
  );
}
