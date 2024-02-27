import SectionHeader from "../sectionElements/SectionHeader";

export default function AboutUs() {
  return (
    <div className="font-mainFont">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre nós"
        sectionHeaderDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />
      <div>Aqui será onde você vai inserir o restante</div>
    </div>
  );
}
