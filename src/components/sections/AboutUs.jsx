import SectionHeader from "../sectionElements/SectionHeader";

export default function AboutUs() {
  return (
    <div className="font-mainFont text-quaternary">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre nós"
        sectionHeaderDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />
      <div className="container flex justify-between w-[1,110px] items-center pt-[3%]">
        <div className="textos">
          <h3 class=' font-medium leading-[24px] text-left'>Nossa História</h3>
          
        </div>
        
      </div>
    </div>
  );
}
