import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import ServiceCard from "../cards/ServiceCard";
import icon from "../../assets/importAssets/expertise.png";

export default function OurProducts() {
  return (
    <div className="full">
      <div className="bg-quinary content py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Linha de Produtos"
          sectionHeaderDescription="Ao longo dos anos, fomos firmando parcerias hoje bastante consolidadas com marcas renomadas e de grande credibilidade no mercado. Encontre a marca que você deseja comprar e clique na categoria para ser levado para a página contendo os produtos desta marca."
        />
        <SectionContent>
          <ServiceCard icon={icon} title="Título" description="Descriptions" />
          <ServiceCard icon={icon} title="Título" description="Descriptions" />
          <ServiceCard icon={icon} title="Título" description="Descriptions" />
          <ServiceCard icon={icon} title="Título" description="Descriptions" />
          <ServiceCard icon={icon} title="Título" description="Descriptions" />
          <ServiceCard icon={icon} title="Título" description="Descriptions" />
          <ServiceCard icon={icon} title="Título" description="Descriptions" />
          <ServiceCard icon={icon} title="Título" description="Descriptions" />
        </SectionContent>
      </div>
    </div>
  );
}
