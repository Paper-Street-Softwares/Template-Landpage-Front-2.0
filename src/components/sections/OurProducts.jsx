import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import ServiceCard from "../cards/ServiceCard";
import icon from "../../assets/importAssets/expertise.png";

export default function OurProducts() {
  return (
    <div className="full">
      <div className="bg-quinary content p-[3%]">
        <SectionHeader
          sectionHeaderTitleSecond="Linha de Produtos"
          sectionHeaderDescription="Ao longo dos anos, fomos firmando parcerias hoje bastante consolidadas com marcas renomadas e de grande credibilidade no mercado. Encontre a marca que você deseja comprar e clique na categoria para ser levado para a página contendo os produtos desta marca."
        />
        <SectionContent>
          <ServiceCard icon={icon} title="Título" description="Description" />
          <ServiceCard icon={icon} title="Título" description="Description" />
          <ServiceCard icon={icon} title="Título" description="Description" />
          <ServiceCard icon={icon} title="Título" description="Description" />
          <ServiceCard icon={icon} title="Título" description="Description" />
          <ServiceCard icon={icon} title="Título" description="Description" />
          <ServiceCard icon={icon} title="Título" description="Description" />
          <ServiceCard icon={icon} title="Título" description="Description" />
        </SectionContent>
      </div>
    </div>
  );
}
