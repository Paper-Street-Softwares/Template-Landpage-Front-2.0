import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgAboutPerson from "../../assets/imgs/about/aboutPerson.jpg";

export default function AboutImgLeft() {
  return (
    <SectionArea className="">
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-0 desktop1:justify-between">
        <img
          src={imgAboutPerson}
          alt="Foto de pessoa"
          className="w-[100%] desktop1:w-[415px] desktop2:w-[485px]"
        />
        <div className="desktop1:w-[450px] desktop2:w-[570px]">
          <SectionTitles className="mb-[18px] desktop1:mb-[26px]">
            Sobre mim
          </SectionTitles>
          <Paragraphs>
            Creci: 11798/PE <br></br>
            Ensino superior: Administração - Facape<br></br>
            Olá, me chamo Rita Almeida, sou corretora de imóveis há mais de 10
            anos e sou formada em adm há 30.
            <br></br>Decidi entrar no ramo quando um colega me fez um elogio
            "Rita, você é tão comunicativa, deveria ser corretora de imóveis" eu
            ainda fiquei receosa "há isso não é para mim" mas decidi arriscar,
            fiz o curso com minha filha ainda pequena, E não me arrependo da
            decisão que tomei.
          </Paragraphs>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
