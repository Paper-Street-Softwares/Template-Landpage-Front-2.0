import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgAboutPhone from "../../assets/imgs/about/aboutPhone.jpg";

export default function AboutImgRight() {
  return (
    <SectionArea className="bg-quinary">
      <SectionWrapper className="flex flex-col-reverse desktop1:flex-row gap-[40px] desktop1:gap-0 desktop1:justify-between">
        <div className="desktop1:w-[450px] desktop2:w-[570px]">
          <SectionTitles className="mb-[18px] desktop1:mb-[26px]">
            Me siga nas redes sociais
          </SectionTitles>
          <Paragraphs>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Paragraphs>
        </div>
        <img
          src={imgAboutPhone}
          alt="Foto de celular"
          className="w-[100%] desktop1:w-[415px] desktop2:w-[485px]"
        />
      </SectionWrapper>
    </SectionArea>
  );
}
