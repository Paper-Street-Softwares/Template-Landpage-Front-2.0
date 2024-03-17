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
        <button className="bg-red-900 hover:bg-red-700">Cloros</button>
        <button className="bg-blue-900 hover:bg-blue-700">Auxiliares</button>
        <button className="bg-green-900 hover:bg-green-700">Todos</button>
        <SectionContent>
          <ImgCodeDescButtonCard
            img={imgProductExample}
            code="Esse é cloro"
            description="Descrição do produto descrição do produto descrição do produto descrição."
            button1Label="Baixar Ficha FISPQ"
            button1Link="#"
            category="cloros"
          />
          <ImgCodeDescButtonCard
            img={imgProductExample}
            code="Auxiliar"
            description="Descrição do produto descrição do produto descrição do produto descrição."
            button1Label="Baixar Ficha FISPQ"
            button1Link="#"
            category="auxiliares"
          />
        </SectionContent>
      </div>
    </div>
  );
}
