import SectionHeader from "../sectionElements/SectionHeader";
import Article from "../sectionElements/Article";
import Img from "../../assets/importAssets/piscina.png"

export default function AboutUs() {
  return (
    <div className="font-mainFont">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre nós"
        sectionHeaderDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        
      />
      <Article
        articleSubtitle="Nossa História"
        articleTitle="Experiência em Grandes Volumes"
        articleParagraph="A Mpa é uma empresa familiar criada especialmente para oferecer atendimento personalizado a proprietários de piscinas com grandes volumes de água. Sua criação remonta ao ano de 2003, embora seus idealizadores sejam pessoas ligadas a esse segmento e que contam com pelo menos 45 anos de experiência nesse tipo de atendimento."
        articleSpan="Nossa missão como empresa é nos aprimorar a cada dia que passa, subir degrau por degrau, avançar no sentido de cumprir sempre nossos objetivos e para que isso aconteça, temos a clara consciência de que precisamos contar sempre com você, cliente. Junte-se a nós!"
        articleImages= {Img}
      />
    </div>
  );
}
