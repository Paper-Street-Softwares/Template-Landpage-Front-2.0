import SectionHeader from "../components/sectionElements/SectionHeader";
import SectionContent from "../components/sectionElements/SectionContent";

function Home() {
  return (
    <div className="content">
      <SectionHeader
        sectionHeaderTitleFirst="Todas as certidões que"
        sectionHeaderTitleSecond="sua empresa precisa"
        sectionHeaderDescription="A Edan Contabilidade simplifica seu dia a dia com links diretos para as principais certidões."
      />
      <SectionContent>
        <div>a</div>
        <div>a</div>
      </SectionContent>
    </div>
  );
}

export default Home;
