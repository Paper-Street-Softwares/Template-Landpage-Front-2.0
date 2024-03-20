import SectionHeader from "../sectionElements/SectionHeader";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import slide1 from "../../assets/banners/aboutUs/slide1bigPool.jpg";
import slide2 from "../../assets/banners/aboutUs/slide2smallPool.jpg";
import slide3 from "../../assets/banners/aboutUs/slide3cleanWater.jpg";

export default function AboutUs() {
  return (
    <div className="font-mainFont py-[26px] phone3:py-[48px]">
      <SectionHeader
        sectionHeaderTitleSecond="Sobre nós"
        sectionHeaderDescription="A Mpa destaca-se no mercado pela excelência no atendimento personalizado e vasta experiência em piscinas de grandes volumes."
      />
      <div className=" desktop1:flex desktop1:flex-row">
        <ArticleComponent>
          <div className=" desktop1:flex desktop1:flex-row desktop1:items-center">
            <Article
              articleSubtitle="Nossa História"
              articleTitle="Experiência em Grandes Volumes"
              articleParagraphfirst="A Mpa é uma empresa familiar criada especialmente para oferecer
              atendimento personalizado a proprietários de piscinas com grandes
              volumes de água. Sua criação remonta ao ano de 2003, embora seus
              idealizadores sejam pessoas ligadas a esse segmento e que contam com
              pelo menos 45 anos de experiência nesse tipo de atendimento."
              articleParagraphTwo="Nossa missão como empresa é nos aprimorar a cada dia que passa,
              subir degrau por degrau, avançar no sentido de cumprir sempre
              nossos objetivos e para que isso aconteça, temos a clara
              consciência de que precisamos contar sempre com você, cliente.
              Junte-se a nós!"
            />

            <div className="flex justify-center pt-[8%] phone1:w-[100%] phone3:pt-[5%] tablet1:pt-[4%] tablet2:pt-[1%] desktop1:w-[55%] desktop2:w-[40%] desktop3:size-[60%]">
              <ImagesGallery3Slides
                slide1={slide1}
                slide2={slide2}
                slide3={slide3}
              />
              <div></div>
            </div>
          </div>
        </ArticleComponent>
      </div>
    </div>
  );
}
