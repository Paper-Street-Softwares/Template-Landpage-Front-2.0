import SectionHeader from "../sectionElements/SectionHeader";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import slide1 from "../../assets/banners/aboutUs/slide1bigPool.jpg";
import slide2 from "../../assets/banners/aboutUs/slide2smallPool.jpg";
import slide3 from "../../assets/banners/aboutUs/slide3cleanWater.jpg";
import ArticleComponent from "../sectionElements/ArticleComponent";
import SectionArticle from "../sectionElements/SectionArticle";

export default function AboutUs() {
  return (
    <div>
      <div className="font-mainFont py-[26px] phone3:py-[48px] phone1:w-[100%] ">
        <SectionHeader
          sectionHeaderTitleSecond="Sobre nós"
          sectionHeaderDescription="A Mpa destaca-se no mercado pela excelência no atendimento personalizado e vasta experiência em piscinas de grandes volumes."
        />

        <div>
          <ArticleComponent>
            <div className=" desktop1:flex desktop1:flex-row desktop1:items-start desktop1:justify-between desktop1:gap-[0%]">
              <div className=" desktop1:w-[60%] desktop3:w-[55%]">
                <SectionArticle
                  articleSubtitle="Nossa História"
                  articleTitle="Experiência em Grandes Volumes"
                  articleParagraphOne="A MPA é uma empresa familiar criada especialmente para oferecer um atendimento exclusivo e personalizado a proprietários de piscinas com grandes volumes de água, tais como piscinas olímpicas e semi olímpicas, entre outras."
                  articleParagraphTwo="A sua criação remonta ao ano de 2003, mas seus idealizadores são pessoas ligadas a esse segmento há pelo menos 45 anos, dessa forma, contam com vasta experiência no atendimento diferenciado que esse tipo de negócio exige."
                  articleParagraphThree="A sua missão enquanto empresa é se aprimorar a cada dia que passa, subir degrau por degrau, avançar sempre no sentido de cumprir objetivos, entregar ao cliente exatamente o que com ele foi negociado na sua plenitude, e ao final de tudo ter a certeza de ter oferecido a ele uma boa experiência de compra. E para que tudo isso aconteça, a empresa tem a clara convicção de que precisa contar sempre com você, cliente! Junte-se à MPA Piscinas!"
                />
              </div>
              <div className=" desktop1:w-[40%] desktop1:pt-[15px]">
                <ImagesGallery3Slides
                  slide1={slide1}
                  slide2={slide2}
                  slide3={slide3}
                />
              </div>
            </div>
          </ArticleComponent>
        </div>
      </div>
    </div>
  );
}
